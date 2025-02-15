"use client";

import { menuItems } from "@/app/constants/navigation";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon/Icon";
import Image from "next/image";
import { breakpointsScrollTrigger } from "@/utils/theme";
import brandLogo from "@/assets/images/brand-logo.png";
import Modal from "react-modal";

// Global flag to track if whether the scroll action was initiated by react-scroll or not
export const ScrollState = {
  ReactScrollInitiated: false,
};

const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrollHappening, setIsScrollHappening] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigationRef = useRef<HTMLDivElement>(null);

  const toggleNavigation = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeNavigationMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleModalToggle = useCallback(() => {
    setIsMenuOpen(false);
    setIsModalOpen((prev) => !prev);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    (async () => {
      try {
        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success) {
          alert(data.message);
        }
      } catch (error) {
        console.error(error);
      }
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
      });
      setIsModalOpen(false);
      setIsLoading(false);
    })();
  };

  /* Effects */

  useEffect(() => {
    Modal.setAppElement(document.body);

    const isSmall = window.matchMedia(breakpointsScrollTrigger.sm);
    const isMediumLandscape = window.matchMedia(
      `${breakpointsScrollTrigger.md} and (orientation: landscape)`
    );
    let prevScrollY = 0;
    let isTicking = false;

    /**
     * Do a check if scrolling up
     * Expand check by confirmed the scrolling up is actually happening
     */
    const checkIsScrollingUp = (y: number): boolean | void => {
      const navEl = navigationRef.current;
      if (!navEl) {
        console.error("Navigation element is not defined");
        return;
      }
      const wrapper = navEl.parentElement;
      if (!wrapper) {
        console.error("Navigation parent element is not defined");
        return;
      }
      if (y === 0) {
        setIsScrollHappening(false);
        return;
      }
      const { height, top } = document.body.getBoundingClientRect();
      if (top < 0 && top + height - window.innerHeight > 0) {
        // scrolling up
        if (prevScrollY > y) {
          if (!ScrollState.ReactScrollInitiated) {
            if (isSmall.matches || isMediumLandscape.matches) {
              setIsScrollHappening(true);
              return;
            }
            setIsScrollHappening(false);
            return;
          }
        }
        setIsScrollHappening(true);
        return true;
      }
      return true;
    };

    let stoppedTimer: NodeJS.Timeout;

    /**
     * Calls rAF if it's not already
     * been done already
     */
    function requestTick() {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          const revealContextual = checkIsScrollingUp(y);
          prevScrollY = y;
          // allow further rAFs to be called
          isTicking = false;
          clearTimeout(stoppedTimer);

          if (revealContextual) {
            // Wait for the nav to be fully hidden
            stoppedTimer = setTimeout(() => {
              const navEl = navigationRef.current;
              if (!navEl) {
                console.error("Navigation element is not defined");
                return;
              }
              const wrapper = navEl.parentElement;
              if (!wrapper) {
                console.error("Navigation parent element is not defined");
                return;
              }
              ScrollState.ReactScrollInitiated = false;
            }, 500);
            return;
          }

          stoppedTimer = setTimeout(() => {
            ScrollState.ReactScrollInitiated = false;
          }, 100);
        });
        isTicking = true;
      }
    }

    window.addEventListener("scroll", requestTick);
    return () => {
      window.removeEventListener("scroll", requestTick);
    };
  }, []);

  // Static JSX component for book now link
  const bookNowLink = (
    <button
      onClick={handleModalToggle}
      type="button"
      className="transition-all duration-300 border border-purple text-fluid-micro-lg leading-fluid-micro-lg uppercase px-4 py-2 font-semibold rounded-md bg-purple text-white hover:text-purple hover:bg-transparent w-full"
    >
      book now
    </button>
  );

  return (
    <header
      className={`3xl:container mx-auto transition-all duration-200 ease-in-out ${
        isScrollHappening ? "2xl:w-[75%] fixed z-10 left-0 right-0" : ""
      }`}
    >
      <div
        ref={navigationRef}
        className={`bg-white relative flex items-center min-h-24 2xl:rounded-3xl 2xl:mt-8 ${
          isScrollHappening ? "2xl:bg-white 2xl:bg-opacity-95" : "2xl:mx-8"
        }`}
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        }}
      >
        <div className="navigation-container px-8 flex justify-between items-center w-full 2xl:justify-start 2xl:gap-11">
          <div className="logo-section">
            <div className="site-branding">
              <h1>
                <Link href="/" rel="home">
                  <Image
                    src={brandLogo}
                    alt="honourable cleaning service"
                    title="site-title"
                    className="logo block w-full"
                    width={120}
                    height={20}
                  />
                </Link>
              </h1>
            </div>
          </div>
          <div
            className={`menu-section fixed min-h-lvh left-0 right-0 top-0 bg-white ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-500 ease-in-out p-6 z-10 2xl:relative 2xl:transform-none 2xl:transition-none 2xl:min-h-[auto] 2xl:p-0 2xl:bg-transparent`}
          >
            <nav className="nav-section">
              {/* navigation close icon */}
              <div className="navigation-close flex justify-end min-h-12 2xl:hidden">
                <button
                  onClick={toggleNavigation}
                  aria-label="close navigation menu"
                >
                  <Icon icon="cross" size={24} />
                </button>
              </div>

              {/* menu items */}
              <ul className="menu-list outline-none m-0 p-0 list-none 2xl:flex">
                {menuItems.map((menuItem, index) => {
                  return (
                    <li
                      key={index}
                      className="menu-list-item relative border-b border-solid py-6 2xl:border-b-0 2xl:px-6 2xl:before:content-[''] 2xl:before:absolute 2xl:before:right-[-2px] 2xl:before:top-[50%] 2xl:before:w-[6px] 2xl:before:h-[6px] 2xl:before:rounded-[50%] 2xl:before:bg-orange-shade 2xl:before:last-of-type:hidden"
                      style={{ borderColor: "rgba(0, 0, 0, 0.1" }}
                    >
                      <Link
                        href={menuItem.href}
                        target={menuItem.target}
                        className="text-purple font-bold uppercase no-underline tracking-wide text-fluid-base leading-fluid-base"
                        replace={true}
                        onClick={closeNavigationMenu}
                      >
                        <span>{menuItem.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="bookNowContainer flex flex-1 justify-start 2xl:hidden py-6">
                <div className="max-w-64 w-full">{bookNowLink}</div>
              </div>
            </nav>
          </div>
          <div className="bookNowContainer flex-1 justify-end hidden 2xl:flex">
            <div className="max-w-40 w-full flex flex-1 text-center">
              {bookNowLink}
            </div>
          </div>
          <div className="burger-menu-section 2xl:hidden">
            <button
              onClick={toggleNavigation}
              aria-label="open navigation menu"
            >
              <Icon icon="menu" size={32} />
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalToggle}
        contentLabel="book your appointment"
        className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto 2xl:w-3/5"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="modalContent relative">
          {isLoading && (
            <div className="absolute flex items-center justify-center left-0 right-0 top-0 bottom-0 ">
              <div className="flex justify-center items-center h-screen">
                <div className="w-12 h-12 border-4 border-t-transparent border-purple rounded-full animate-spin"></div>
              </div>
            </div>
          )}
          <p className="text-fluid-body-3 leading-fluid-body-3 text-purple mb-5 font-semibold">
            Book your appointment
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent placeholder:text-slate-400 text-purple border border-grey-shade rounded-md px-3 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow text-fluid-micro-lg leading-fluid-micro-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent placeholder:text-slate-400 text-purple border border-grey-shade rounded-md px-3 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow text-fluid-micro-lg leading-fluid-micro-lg"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full bg-transparent placeholder:text-slate-400 text-purple border border-grey-shade rounded-md px-3 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow text-fluid-micro-lg leading-fluid-micro-lg"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full bg-transparent placeholder:text-slate-400 text-purple border border-grey-shade rounded-md px-3 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow text-fluid-micro-lg leading-fluid-micro-lg"
            />
            <button
              type="submit"
              className="shadow px-3 py-5 border border-b-purple block capitalize font-semibold rounded-md text-fluid-micro-lg leading-fluid-micro-lg transition-all duration-300 bg-purple text-white hover:text-purple hover:bg-transparent"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </Modal>
    </header>
  );
};

export default Navigation;

"use client";

import { menuItems } from "@/app/constants/navigation";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon/Icon";
import Image from "next/image";
import { breakpointsScrollTrigger } from "@/utils/theme";

// Global flag to track if whether the scroll action was initiated by react-scroll or not
export const ScrollState = {
  ReactScrollInitiated: false,
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrollHappening, setIsScrollHappening] = useState<boolean>(false);
  const navigationRef = useRef<HTMLDivElement>(null);

  const toggleNavigation = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeNavigationMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  /* Effects */

  useEffect(() => {
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

  return (
    <header
      className={`3xl:container mx-auto transition-all duration-200 ease-in-out ${
        isScrollHappening ? "2xl:w-[75%] fixed z-10 left-0 right-0" : ""
      }`}
    >
      <div
        ref={navigationRef}
        className={`bg-white relative flex items-center min-h-24 2xl:rounded-3xl 2xl:mt-8 ${
          isScrollHappening ? "2xl:bg-white 2xl:bg-opacity-90" : "2xl:mx-8"
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
                <Link href="/" rel="home" aria-label="company name">
                  {true ? (
                    <p className="font-bold text-purple">Company Logo</p>
                  ) : (
                    <Image
                      src=""
                      alt="logo-section"
                      title="site-title"
                      height={48}
                      width={100}
                      className="logo block max-h-12"
                    />
                  )}
                </Link>
              </h1>
            </div>
          </div>
          <div
            className={`menu-section fixed min-h-lvh left-0 right-0 top-0 bg-white ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-500 ease-in-out p-6 z-10 2xl:relative 2xl:transform-none 2xl:transition-none 2xl:min-h-[auto] 2xl:p-0 lg:bg-transparent`}
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
            </nav>
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
    </header>
  );
};

export default Navigation;

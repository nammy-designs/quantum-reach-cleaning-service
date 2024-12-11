"use client";

import { menuItems } from "@/app/constants/navigation";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import Icon from "@/components/Icon/Icon";
import Image from "next/image";

// Global flag to track if whether the scroll action was initiated by react-scroll or not
export const ScrollState = {
  ReactScrollInitiated: false,
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navigationRef = useRef<HTMLDivElement>(null);

  const toggleNavigation = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <div className="3xl:container mx-auto">
      <div
        ref={navigationRef}
        className="bg-white relative flex items-center min-h-24 2xl:mx-8 2xl:rounded-3xl 2xl:mt-8"
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
            } transition-transform duration-500 ease-in-out p-6 z-10 2xl:relative 2xl:transform-none 2xl:transition-none 2xl:min-h-[auto] 2xl:p-0`}
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
    </div>
  );
};

export default Navigation;

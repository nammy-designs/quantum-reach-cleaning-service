"use client";

import { menuItems } from "@/app/constants/navigation";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="3xl:container mx-auto text-light-blue xl:px-8 relative overflow-y-hidden">
      <section
        id="footer-section"
        className="relative overflow-hidden xl:rounded-[30px]"
      >
        <div
          id="footer-section"
          className="relative text-fluid-base leading-fluid-base bg-purple border border-t-8 border-t-orange-shade px-8 pt-8 [&_.widget-menu-item]:font-semibold [&_.widget-menu-item]:pb-3 [&_.widget-menu-item]:leading-5 3xl:pt-14"
        >
          <div className="2xl:max-w-[70%] 2xl:ml-auto">
            <div className="widget-row grid grid-cols-1 [&>.widget-col]:pb-8 xl:grid-cols-3 xl:gap-5">
              <div className="widget-col">
                <div className="nav-menu-2 widget">
                  <div className="nav-menu">
                    <h2 className="widget-title font-bold tracking-normal text-white capitalize mb-8">
                      useful link
                    </h2>
                    <div className="nav-link-container">
                      <ul className="nav-menu-items flex flex-wrap list-items-container list-none m-0 p-0">
                        {menuItems.map((menuItem, index) => {
                          return (
                            <li
                              className="nav-menu-item w-[50%] widget-menu-item text-light-blue"
                              key={index}
                            >
                              <Link
                                href={menuItem.href}
                                className="no-underline capitalize"
                              >
                                <span>{menuItem.label}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget-col">
                <div className="nav-menu-2 widget">
                  <div className="nav-menu">
                    <h2 className="widget-title font-bold tracking-normal text-white capitalize mb-8">
                      say hello
                    </h2>
                    <div className="nav-link-container">
                      <ul className="list-items-container">
                        <li className="nav-menu-item widget-menu-item">
                          <span className="time-title">
                            <a href="tel:+16047516260">+1 (604) 751 6260</a>
                          </span>
                        </li>
                        <li className="nav-menu-item widget-menu-item">
                          <span className="time-title">hello@domain.com</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright flex justify-center mt-16">
            <div className="footer-copyright-text-area bg-white px-9 py-5 w-full text-purple font-semibold text-center xl:max-w-[75%] rounded-t-2xl xl:rounded-t-3xl">
              Copyright © {new Date().getFullYear()}{" "}
              <a href="#" className="text-inherit">
                Honourable Cleaning Service
              </a>
              , All Rights Reserved.
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

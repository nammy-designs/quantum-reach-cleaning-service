import { menuItems } from "@/app/constants/navigation";

const Footer = () => {
  return (
    <div className="3xl:container mx-auto text-light-blue xl:px-8 relative overflow-y-hidden">
      <section
        id="footer-section"
        className="relative overflow-hidden xl:rounded-[30px]"
      >
        <footer
          id="footer-section"
          className="relative text-fluid-base leading-fluid-base bg-purple border border-t-8 border-t-orange-shade px-8 pt-8 [&_.widget-menu-item]:font-semibold [&_.widget-menu-item]:pb-3 [&_.widget-menu-item]:leading-5 3xl:pt-14"
        >
          <div className="2xl:max-w-[70%] 2xl:ml-auto">
            <div className="widget-row grid grid-cols-1 [&>.widget-col]:pb-8 xl:grid-cols-3 xl:gap-5">
              <div className="widget-col">
                <div className="nav-menu-2 widget">
                  <aside className="nav-menu">
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
                              <a href="#" className="no-underline capitalize">
                                <span>{menuItem.label}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
              <div className="widget-col">
                <div className="nav-menu-2 widget">
                  <aside className="nav-menu">
                    <h2 className="widget-title font-bold tracking-normal text-white capitalize mb-8">
                      working time
                    </h2>
                    <div className="nav-link-container">
                      <ul className="list-items-container">
                        <li className="nav-menu-item widget-menu-item">
                          <span className="time-title">
                            Mon - Fri: 9.00am - 5.00pm
                          </span>
                        </li>

                        <li className="nav-menu-item widget-menu-item">
                          <span className="time-title">
                            Mon - Fri: 9.00am - 5.00pm
                          </span>
                        </li>

                        <li className="nav-menu-item widget-menu-item">
                          <span className="time-title">
                            Sat: 9.00am - 5.00pm
                          </span>
                        </li>

                        <li className="nav-menu-item widget-menu-item">
                          <span className="time-title">Sunday Closed</span>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
              <div className="widget-col">
                <div className="nav-menu-2 widget">
                  <aside className="nav-menu">
                    <h2 className="widget-title font-bold tracking-normal text-white capitalize mb-8">
                      say hello
                    </h2>
                    <div className="nav-link-container">
                      <ul className="list-items-container">
                        <li className="nav-menu-item widget-menu-item">
                          <span className="time-title">+1 888 898 888 888</span>
                        </li>
                        <li className="nav-menu-item widget-menu-item">
                          <span className="time-title">
                            info@yourdomain.com
                          </span>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright flex justify-center mt-16">
            <div className="footer-copyright-text-area bg-white px-9 py-5 w-full text-purple font-semibold text-center xl:max-w-[75%] rounded-t-2xl xl:rounded-t-3xl">
              Copyright © 2024{" "}
              <a href="#" className="text-inherit">
                Organization Name
              </a>
              , All Rights Reserved.
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;

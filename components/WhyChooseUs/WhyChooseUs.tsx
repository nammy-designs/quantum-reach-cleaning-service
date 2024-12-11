"use client";

import Lottie from "lottie-react";
import Icon from "../Icon/Icon";
import HeadingWidget from "@/components/SharedComponents/HeadingWidget";
import cleaningJson from "@/assets/animations/cleaning.json";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" title="why choose us" className="py-16">
      <div className="relative 3xl:container mx-auto">
        <div className="xl:max-w-[75%] mx-auto">
          <HeadingWidget
            title={"why choose us?"}
            description={"get amazing cleaning in 4 simple steps"}
          />

          {/* why choose us section */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex 2xl:pb-14 order-2 md:order-none">
              <div className="heading sub-heading description">
                <div className="flex gap-2 items-center pb-2">
                  <Icon
                    icon="broomFill"
                    className="fill-orange-shade"
                    size={16}
                  />
                  <p className="uppercase font-bold text-purple tracking-wide text-fluid-base">
                    how it works
                  </p>
                </div>
                <h2 className="tracking-[.25px] font-bold text-purple text-fluid-h4 leading-fluid-h4">
                  We work many fields to clean your area
                </h2>
                <div className="heading-des py-5 lg:py-7">
                  <p className="text-purple text-fluid-body-5 leading-fluid-body-5">
                    {`We carefully screen all of our cleaners, so you can rest
                    assured that your home would receive the absolute highest
                    quality of service providing. Ultricies tristique nulla
                    aliquet enim tortor at auctor urna nunc.`}
                  </p>
                </div>
                <div className="widget-container grid gap-6 2xl:grid-cols-2 2xl:gap-8 py-5 lg:py-7">
                  <div className="text-purple flex gap-4">
                    <div className="p-6 bg-light-grey-shade rounded-3xl flex self-start">
                      <Icon
                        icon="securityBadge"
                        className="fill-purple"
                        size={32}
                      />
                    </div>
                    <div>
                      <h2 className="font-bold mb-1 text-fluid-body-2-guided leading-fluid-body-2-guided">
                        Full Security
                      </h2>
                      <div className="heading-des">
                        <p className="text-purple tracking-normal text-fluid-micro-guided leading-fluid-micro-guided">
                          {`We are proving all type of cleaning solutions for every small and big businesses`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-purple flex gap-4">
                    <div className="p-6 bg-light-grey-shade rounded-3xl flex self-start">
                      <Icon icon="clock" size={32} className="fill-purple" />
                    </div>
                    <div>
                      <h2 className="font-bold mb-1 capitalize text-fluid-body-2-guided leading-fluid-body-2-guided">
                        Always in time
                      </h2>
                      <div className="heading-des">
                        <p className="text-purple text-base tracking-normal text-fluid-micro-guided leading-fluid-micro-guided">
                          {`We are proving all type of cleaning solutions for every small and big businesses`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="action-container w-full lg:w-1/2 lg:mt-7 text-center">
                  <Link
                    href={"#contact"}
                    className="px-3 py-5 border border-b-purple text-purple block capitalize font-semibold rounded-md text-fluid-micro-lg leading-fluid-micro-lg transition-all duration-300 hover:bg-purple hover:text-white"
                  >
                    <p>request for a callback</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <Lottie animationData={cleaningJson} />
            </div>
          </div>

          {/* states */}
          <div
            className="grid grid-cols-1 gap-5 py-5
          md:grid-cols-2 md:gap-8 md:pt-6 
          lg:grid-cols-2 lg:gap-6 lg:py-7
          2xl:grid-cols-2 2xl:gap-8
          3xl:grid-cols-4 3xl:gap-8"
          >
            <div className="widget-container text-purple">
              <h4 className={`font-extrabold text-fluid-h1 leading-fluid-h1`}>
                <span className="open-sans text-transparent stroke-styles relative">
                  250
                </span>
                <span className="open-sans ml-3">+</span>
              </h4>
              <div className="description">
                <p className="font-medium text-fluid-body-5 leading-fluid-body-5">
                  Professional and Experienced staff ready to help you anytime.
                </p>
              </div>
            </div>

            <div className="widget-container text-purple">
              <h4 className={`font-extrabold text-fluid-h1 leading-fluid-h1`}>
                <span className="open-sans text-transparent stroke-styles relative">
                  14
                </span>
                <span className="open-sans ml-3">m</span>
              </h4>
              <div className="description">
                <p className="font-medium text-fluid-body-5 leading-fluid-body-5">
                  Proving all type of cleaning solutions every small and big
                  businesses
                </p>
              </div>
            </div>

            <div className="widget-container text-purple">
              <h4 className={`font-extrabold text-fluid-h1 leading-fluid-h1`}>
                <span className="open-sans text-transparent stroke-styles relative">
                  460
                </span>
                <span className="open-sans ml-3">m</span>
              </h4>
              <div className="description">
                <p className="font-medium text-fluid-body-5 leading-fluid-body-5">
                  We start with a thorough detail clean throughout your house.
                </p>
              </div>
            </div>

            <div className="widget-container text-purple">
              <h4 className={`font-extrabold text-fluid-h1 leading-fluid-h1`}>
                <span className="open-sans text-transparent stroke-styles relative">
                  30
                </span>
                <span className="open-sans ml-3">k</span>
              </h4>
              <div className="description">
                <p className="font-medium text-fluid-body-5 leading-fluid-body-5">
                  We hold a successful track record of satisfying our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

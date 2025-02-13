"use client";

import Lottie from "lottie-react";
import Icon from "../Icon/Icon";
import HeadingWidget from "@/components/SharedComponents/HeadingWidget";
import cleaningJson from "@/assets/animations/cleaning.json";

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
                        Contact Us
                      </h2>
                      <div className="heading-des">
                        <p className="text-purple tracking-normal text-fluid-micro-guided leading-fluid-micro-guided">
                          {`Reach out via phone or our website to get started.`}
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
                        Book An Appointment
                      </h2>
                      <div className="heading-des">
                        <p className="text-purple text-base tracking-normal text-fluid-micro-guided leading-fluid-micro-guided">
                          {`Choose a convenient date and time for your cleaning service.`}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-purple flex gap-4">
                    <div className="p-6 bg-light-grey-shade rounded-3xl flex self-start">
                      <Icon
                        icon="servicePackage"
                        size={32}
                        className="fill-purple"
                      />
                    </div>
                    <div>
                      <h2 className="font-bold mb-1 capitalize text-fluid-body-2-guided leading-fluid-body-2-guided">
                        Select your package
                      </h2>
                      <div className="heading-des">
                        <p className="text-purple text-base tracking-normal text-fluid-micro-guided leading-fluid-micro-guided">
                          {`Pick the cleaning package that best fits your needs.`}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-purple flex gap-4">
                    <div className="p-6 bg-light-grey-shade rounded-3xl flex self-start">
                      <Icon icon="building" size={32} className="fill-purple" />
                    </div>
                    <div>
                      <h2 className="font-bold mb-1 capitalize text-fluid-body-2-guided leading-fluid-body-2-guided">
                        Enjoy A Spotless Home
                      </h2>
                      <div className="heading-des">
                        <p className="text-purple text-base tracking-normal text-fluid-micro-guided leading-fluid-micro-guided">
                          {`Sit back and relax while we take care of the cleaning!`}
                        </p>
                      </div>
                    </div>
                  </div>
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
              <p className={`font-extrabold text-fluid-h1 leading-fluid-h1`}>
                <span className="open-sans text-transparent stroke-styles relative">
                  800
                </span>
                <span className="open-sans ml-3">+</span>
              </p>
              <div className="description">
                <p className="font-medium text-fluid-body-5 leading-fluid-body-5">
                  Successful projects completed with top-tier results.
                </p>
              </div>
            </div>

            <div className="widget-container text-purple">
              <p className={`font-extrabold text-fluid-h1 leading-fluid-h1`}>
                <span className="open-sans text-transparent stroke-styles relative">
                  1K
                </span>
                <span className="open-sans ml-3">+</span>
              </p>
              <div className="description">
                <p className="font-medium text-fluid-body-5 leading-fluid-body-5">
                  Satisfied clients who trust out expertise.
                </p>
              </div>
            </div>

            <div className="widget-container text-purple">
              <p className={`font-extrabold text-fluid-h1 leading-fluid-h1`}>
                <span className="open-sans text-transparent stroke-styles relative">
                  100
                </span>
                <span className="open-sans ml-3">+</span>
              </p>
              <div className="description">
                <p className="font-medium text-fluid-body-5 leading-fluid-body-5">
                  Five-star google reviews from happy customers.
                </p>
              </div>
            </div>

            <div className="widget-container text-purple">
              <p className={`font-extrabold text-fluid-h1 leading-fluid-h1`}>
                <span className="open-sans text-transparent stroke-styles relative">
                  24/
                </span>
                <span className="open-sans ml-3">7</span>
              </p>
              <div className="description">
                <p className="font-medium text-fluid-body-5 leading-fluid-body-5">
                  Dedicated support to assist you anytime.
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

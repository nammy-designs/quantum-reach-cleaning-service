"use client";

import HeadingWidget from "@/components/SharedComponents/HeadingWidget";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      title="what our customers says about us"
      className="py-16"
    >
      <div className="text-purple 2xl:text-5xl 3xl:container mx-auto">
        <div className="xl:max-w-[75%] mx-auto">
          <div className="services-container">
            <HeadingWidget
              title={"testimonials"}
              description={"what our customers says about us"}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-8">
              {/* section to add sliders for testimonials */}
              {testimonials.map(({ name, description }, idx) => {
                return (
                  <div className="w-full" key={idx}>
                    <div className="w-full mx-auto rounded-lg bg-white border border-purple p-5 text-gray-800 font-light mb-6 h-full">
                      <div className="w-full flex mb-4 items-center">
                        <div className="flex-grow pl-3">
                          <p className="font-bold uppercase text-fluid-base leading-fluid-base">
                            {name}
                          </p>
                        </div>
                      </div>
                      <div className="w-full">
                        <p className="leading-tight text-fluid-micro-guided leading-fluid-micro font-semibold text-purple">
                          <span className="text-lg leading-none italic text-purple mr-1">
                            &quot;
                          </span>
                          {description}
                          <span className="text-lg leading-none italic ml-1">
                            &quot;
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

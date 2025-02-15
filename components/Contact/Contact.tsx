"use client";

import HeadingWidget from "@/components/SharedComponents/HeadingWidget";

const ContactUs = () => {
  return (
    <section id="contact" title="contact us" className="py-16">
      <div className="text-purple 2xl:text-5xl 3xl:container mx-auto">
        <div className="xl:max-w-[75%] mx-auto">
          <div className="services-container">
            <HeadingWidget
              title={"Contact us"}
              description={"Get in touch for a free quote"}
            />

            <div className="grid grid-cols-1 md:grid-cols-12 md:gap-5 text-purple">
              <div className="md:col-span-4 rounded-xl relative overflow-hidden mb-5 2xl:mb-0">
                <p className="text-fluid-body-1 leading-fluid-body-1 font-semibold">
                  Get In Touch
                </p>
                <p className="text-fluid-micro-lg mt-2 leading-fluid-micro-lg font-semibold">
                  We provide cleaning service across Abbotsford, Surrey,
                  Langley, Mission and Chilliwack.
                </p>
                <p className="text-fluid-micro-lg mt-2 leading-fluid-micro-lg font-semibold">
                  Mobile: <a href="tel:+16047516260">+1 (604) 751 6260</a>
                </p>
                <p className="text-fluid-micro-lg mt-2 leading-fluid-micro-lg font-semibold">
                  Email: Hello@honourablecleaning.com
                </p>
              </div>
              <form className="md:col-span-8">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block capitalize mb-2 text-fluid-micro-lg leading-fluid-micro-lg font-semibold text-purple"
                      htmlFor="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full bg-transparent placeholder:text-slate-400 text-purple border border-grey-shade rounded-md px-3 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow text-fluid-micro-lg leading-fluid-micro-lg"
                      id="grid-first-name"
                      type="text"
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block capitalize mb-2 text-fluid-micro-lg leading-fluid-micro-lg font-semibold text-purple"
                      htmlFor="grid-last-name"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full bg-transparent placeholder:text-slate-400 text-purple border border-grey-shade rounded-md px-3 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow text-fluid-micro-lg leading-fluid-micro-lg"
                      id="grid-last-name"
                      type="text"
                      placeholder="Enter Last Name"
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-3">
                    <label
                      className="block capitalize mb-2 text-fluid-micro-lg leading-fluid-micro-lg font-semibold text-purple"
                      htmlFor="grid-mobile-number"
                    >
                      Mobile Number
                    </label>
                    <input
                      className="w-full bg-transparent placeholder:text-slate-400 text-purple border border-grey-shade rounded-md px-3 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow text-fluid-micro-lg leading-fluid-micro-lg"
                      id="grid-mobile-number"
                      type="number"
                      placeholder="Enter Mobile Number"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block capitalize mb-2 text-fluid-micro-lg leading-fluid-micro-lg font-semibold text-purple"
                      htmlFor="grid-password"
                    >
                      Email Address
                    </label>
                    <input
                      className="w-full bg-transparent placeholder:text-slate-400 text-purple  border border-grey-shade rounded-md px-3 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow text-fluid-micro-lg leading-fluid-micro-lg"
                      id="grid-email"
                      type="email"
                      placeholder="Enter Email Address"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block capitalize mb-2 text-fluid-micro-lg leading-fluid-micro-lg font-semibold text-purple"
                      htmlFor="grid-message"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="grid-message"
                      rows={5}
                      className="appearance-none block w-full border border-grey-shade rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-500 text-fluid-micro-lg leading-fluid-micro-lg"
                    ></textarea>
                  </div>
                  <div className="flex justify-between w-full px-3 mt-5">
                    <button
                      className="shadow px-3 py-5 border border-b-purple text-purple block capitalize font-semibold rounded-md text-fluid-micro-lg leading-fluid-micro-lg transition-all duration-300 hover:bg-purple hover:text-white"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

import { services } from "@/data/services";
import Card from "@/components/Card/Card";
import HeadingWidget from "@/components/SharedComponents/HeadingWidget";

const Services = () => {
  return (
    <section id="services" title="our services" className="py-16">
      <div className="text-purple 3xl:container mx-auto">
        <div className="xl:max-w-[75%] mx-auto">
          <div className="services-container">
            <HeadingWidget
              title={"Services"}
              description={"Get amazing cleaning offerings"}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-8">
              {services.map((service, index) => {
                return (
                  <div key={index}>
                    <Card {...service} />
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

export default Services;

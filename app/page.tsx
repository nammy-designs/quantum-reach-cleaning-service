import { Metadata } from "next";

import Footer from "@/components/Footer/Footer";
import Services from "@/components/Services/Services";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import Navigation from "@/components/Navigation/Navigation";
import Slider from "@/components/Slider/Slider";
import ContactUs from "@/components/Contact/Contact";

export const metadata: Metadata = {
  title: "Organization Name",
  description: "Organization Description",
  icons: "/",
};

async function Home() {
  return (
    <>
      <Navigation />
      <main className="px-8 2xl:px-0">
        <Slider />
        <WhyChooseUs />
        <Services />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default Home;

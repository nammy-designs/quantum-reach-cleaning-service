import { IconTypeProp } from "@/components/Icon/Icon";
import slide1 from "@/assets/images/slider/slide-1.png";
import slide2 from "@/assets/images/slider/slide-2.png";
import { StaticImageData } from "next/image";

type Slide = {
  id: number;
  title: string;
  description: string;
  imgUrl: StaticImageData;
  iconName: IconTypeProp;
};

const slides: Array<Slide> = [
  {
    id: 1,
    title: "residential cleaning",
    description:
      "Experience a spotless home or office with our expert cleaning services. Your satisfaction is our priority!",
    imgUrl: slide1,
    iconName: "menWithCleaner",
  },
  {
    id: 2,
    title: "Office Cleaning",
    description:
      "We use safe, eco-friendly products to ensure a clean environment for you and your loved ones.. ",
    imgUrl: slide2,
    iconName: "mop",
  },
];

export { slides };

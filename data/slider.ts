import { IconTypeProp } from "@/components/Icon/Icon";
import slide1 from "@/assets/images/slider/slide-1.jpg";
import slide2 from "@/assets/images/slider/slide-2.jpg";
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgUrl: slide1,
    iconName: "menWithCleaner",
  },
  {
    id: 2,
    title: "Office Cleaning",
    description:
      "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    imgUrl: slide2,
    iconName: "mop",
  },
];

export { slides };

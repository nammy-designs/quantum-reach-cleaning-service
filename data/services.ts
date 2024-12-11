import { IconTypeProp } from "@/components/Icon/Icon";
import { StaticImageData } from "next/image";
import residentialCleaning from "@/assets/images/services/residential-cleaning.jpg";
import officeCleaning from "@/assets/images/services/office-cleaning.jpg";
import floorCleaning from "@/assets/images/services/floor-cleaning.jpg";
import glassCleaning from "@/assets/images/services/glass-cleaning.jpg";
import pressureCleaning from "@/assets/images/services/pressure-cleaning.jpg";
import windowCleaning from "@/assets/images/services/window-cleaning.jpg";
import carpetCleaning from "@/assets/images/services/carpet-cleaning.jpg";
import commercialCleaning from "@/assets/images/services/commercial-cleaning.jpg";

type Service = {
  id: number;
  title: string;
  description: string;
  imgUrl: StaticImageData;
  iconName: IconTypeProp;
};

type ServicesType = Array<Service>;

const services: ServicesType = [
  {
    id: 1,
    title: "residential cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    imgUrl: residentialCleaning,
    iconName: "menWithCleaner",
  },
  {
    id: 2,
    title: "Office Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: officeCleaning,
    iconName: "mop",
  },
  {
    id: 3,
    title: "Floor Cleaner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    imgUrl: floorCleaning,
    iconName: "cleaningMen",
  },
  {
    id: 4,
    title: "Domestic Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    imgUrl: glassCleaning,
    iconName: "glassClean",
  },
  {
    id: 5,
    title: "Pressure Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    imgUrl: pressureCleaning,
    iconName: "vacuumCleaner",
  },
  {
    id: 6,
    title: "window cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    imgUrl: windowCleaning,
    iconName: "sprayBottle",
  },
  {
    id: 7,
    title: "carpet cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    imgUrl: carpetCleaning,
    iconName: "carpet",
  },
  {
    id: 8,
    title: "commercial cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    imgUrl: commercialCleaning,
    iconName: "building",
  },
];

export { services };
export type { Service, ServicesType };

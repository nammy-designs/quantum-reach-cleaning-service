import { IconTypeProp } from "@/components/Icon/Icon";
import { StaticImageData } from "next/image";
import residentialCleaning from "@/assets/images/services/residential-cleaning.jpg";
import officeCleaning from "@/assets/images/services/office-cleaning.jpg";
import floorCleaning from "@/assets/images/services/floor-cleaning.jpg";
import glassCleaning from "@/assets/images/services/glass-cleaning.jpg";
import pressureCleaning from "@/assets/images/services/pressure-cleaning.jpg";
import windowCleaning from "@/assets/images/services/window-cleaning.jpg";
import carpetCleaning from "@/assets/images/services/carpet-cleaning.jpg";

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
      "Regular home cleaning, deep cleaning, move-in/move-out cleaning.",
    imgUrl: residentialCleaning,
    iconName: "menWithCleaner",
  },
  {
    id: 2,
    title: "Commercial Cleaning",
    description: "Office cleaning, retail store cleaning, warehouse cleaning.",
    imgUrl: officeCleaning,
    iconName: "building",
  },
  {
    id: 3,
    title: "Post-Construction Cleaning",
    description: "Removing dust, debris, and making spaces move-in ready.",
    imgUrl: floorCleaning,
    iconName: "cleaningMen",
  },
  {
    id: 4,
    title: "Carpet & Upholstery Cleaning",
    description: "Deep cleaning for carpets, sofas and furniture.",
    imgUrl: carpetCleaning,
    iconName: "carpet",
  },
  {
    id: 5,
    title: "Airbnb & Rental Cleaning",
    description: "Quick turnovers for short-term rentals.",
    imgUrl: pressureCleaning,
    iconName: "vacuumCleaner",
  },
  {
    id: 6,
    title: "Disinfection & Sanitization",
    description: "Killing germs in homes and businesses.",
    imgUrl: windowCleaning,
    iconName: "sprayBottle",
  },
  {
    id: 7,
    title: "Windows & Glass Cleaning",
    description: "Streak-free windows for homes and offices.",
    imgUrl: glassCleaning,
    iconName: "sprayBottle",
  },
];

export { services };
export type { Service, ServicesType };

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
      "A clean home is a happy home, and we’re here to make it shine. Our residential cleaning services are designed to give you a spotless, fresh, and healthy living space without the stress. Whether it’s a one-time deep clean or regular maintenance, our team tailors every service to fit your unique needs.",
    imgUrl: residentialCleaning,
    iconName: "menWithCleaner",
  },
  {
    id: 2,
    title: "Office Cleaning",
    description:
      "A clean office isn’t just about appearances—it’s about productivity, health, and making the right impression. Our professional office cleaning services ensure your workplace is spotless, welcoming, and ready for success.",
    imgUrl: officeCleaning,
    iconName: "mop",
  },
  {
    id: 3,
    title: "Floor Cleaner",
    description:
      "Floors are the foundation of any space, and keeping them clean makes a lasting impression. Our professional floor cleaning services restore and maintain the beauty of your floors, ensuring they stay spotless, safe, and inviting.",
    imgUrl: floorCleaning,
    iconName: "cleaningMen",
  },
  {
    id: 4,
    title: "Domestic Cleaning",
    description:
      "Your home is your sanctuary, and it deserves to be clean, comfortable, and stress-free. Our domestic cleaning services are designed to take the hassle out of your routine, giving you more time to relax and enjoy your space.",
    imgUrl: glassCleaning,
    iconName: "glassClean",
  },
  {
    id: 5,
    title: "Pressure Cleaning",
    description:
      "Over time, dirt, mold, and stains can build up on outdoor surfaces, diminishing their appearance and durability. Our expert pressure cleaning services restore the beauty of your property, making it look fresh and clean in no time.",
    imgUrl: pressureCleaning,
    iconName: "vacuumCleaner",
  },
  {
    id: 6,
    title: "window cleaning",
    description:
      "Brighten up your space with spotless, streak-free windows that let the light shine in. Our professional window cleaning services ensure your windows look flawless, enhancing the beauty and value of your home or business.",
    imgUrl: windowCleaning,
    iconName: "sprayBottle",
  },
  {
    id: 7,
    title: "carpet cleaning",
    description:
      "Carpets add warmth and comfort to any space, but they also collect dirt, dust, and allergens over time. Our professional carpet cleaning services are designed to restore your carpets’ freshness, beauty, and hygiene, making your home or office feel like new again.",
    imgUrl: carpetCleaning,
    iconName: "carpet",
  },
  {
    id: 8,
    title: "commercial cleaning",
    description:
      "A clean and organized workspace is key to productivity, employee morale, and making a great impression on clients. Our commercial cleaning services are tailored to meet the unique needs of your business, ensuring your premises are spotless, hygienic, and welcoming.",
    imgUrl: commercialCleaning,
    iconName: "building",
  },
];

export { services };
export type { Service, ServicesType };

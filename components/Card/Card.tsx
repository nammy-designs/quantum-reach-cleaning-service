import { Service } from "@/data/services";
import Image from "next/image";
import Icon from "../Icon/Icon";

type CardPropTypes = Service;

const Card = (props: CardPropTypes) => {
  const { description, imgUrl, title, iconName } = props;
  return (
    <div
      className="relative bg-white overflow-hidden rounded-3xl border text-purple h-full"
      style={{ borderColor: "rgba(0, 24, 55, 0.15)" }}
    >
      <article className="h-full flex flex-col">
        <div className="relative w-full h-52 2xl:h-72 overflow-hidden rounded-3xl">
          <Image
            src={imgUrl}
            className="service-img block min-w-full transition-all duration-300 ease-linear hover:scale-105 shadow-2xl"
            alt="service-img-01"
            fill={true}
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
        <div className="content-box px-10 pt-8 pb-7 flex flex-col flex-1">
          <h3 className="service-title mb-3 font-semibold capitalize tracking-wide text-fluid-body-4 leading-fluid-body-4">
            {title}
          </h3>
          <p className="service-description font-semibold text-purple mb-5 text-fluid-micro-guided leading-fluid-micro-guided">
            {description}
          </p>
          <div className="bg-light-grey-shade w-16 h-16 rounded-2xl flex justify-center items-center mt-auto">
            <Icon icon={iconName} size={40} />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;

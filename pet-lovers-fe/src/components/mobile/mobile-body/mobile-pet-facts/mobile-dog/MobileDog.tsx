import { Image } from "antd";
import { FC } from "react";
import "./MobileDog.less";
import { mobileWoof } from "../../../../../assets/images/mobile";
import { MobileDogDescription } from "./mobile-dog-description/MobileDogDescription";

export const MobileDog: FC = () => {
  return (
    <div className="mobile-pet-facts-dog">
      <Image src={mobileWoof} />

      <MobileDogDescription></MobileDogDescription>
    </div>
  );
};

import { Image } from "antd";
import { FC } from "react";
import "./MobileCat.less";
import { MobileCatDescription } from "./mobile-cat-description/MobileCatDescription";
import { mobileMeow } from "../../../../../assets/images/mobile";

export const MobileCat: FC = () => {
  return (
    <div className="mobile-pet-facts-cat">
      <Image src={mobileMeow} />
      <MobileCatDescription></MobileCatDescription>
    </div>
  );
};

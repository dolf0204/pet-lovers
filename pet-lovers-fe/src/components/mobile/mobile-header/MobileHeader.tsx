import { Image } from "antd";
import { FC } from "react";
import { mobileHeaderImage } from "../../../assets/images/mobile";

export const MobileHeader: FC = () => {
  return (
    <div className="mobile-headline-image">
      <Image src={mobileHeaderImage} />
    </div>
  );
};

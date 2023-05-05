import { Image } from "antd";
import { FC } from "react";
import "./Header.less";
import { headerImage } from "../../assets/images";

export const Header: FC = () => {
  return (
    <div className="headline-image">
      <Image width={1440} src={headerImage} />
    </div>
  );
};

import { Image } from "antd";
import { FC } from "react";
import { headerImage } from "../../assets/images";

export const Header: FC = () => {
  return (
    <div>
      <Image width={1440} src={headerImage} />
    </div>
  );
};

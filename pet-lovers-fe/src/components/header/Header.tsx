import { Image } from "antd";
import { FC } from "react";
import { headerImage } from "../../assets/images";

export const Header: FC = () => {
  return (
    <div className="headline-image">
      <Image src={headerImage} preview={false} />
    </div>
  );
};

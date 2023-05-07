import { Image } from "antd";
import { FC } from "react";
import { meow } from "../../../../assets/images";
import "./Cat.less";
import { CatDescription } from "./cat-description/CatDescription";

export const Cat: FC = () => {
  return (
    <div className="pet-facts-cat">
      <Image src={meow} />
      <CatDescription></CatDescription>
    </div>
  );
};

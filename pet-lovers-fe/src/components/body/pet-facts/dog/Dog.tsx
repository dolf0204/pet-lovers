import { Image } from "antd";
import { FC } from "react";
import "./Dog.less";
import { DogDescription } from "./dog-description/DogDescription";
import { woof } from "../../../../assets/images";

export const Dog: FC = () => {
  return (
    <div className="pet-facts-dog">
      <DogDescription></DogDescription>

      <Image src={woof} />
    </div>
  );
};

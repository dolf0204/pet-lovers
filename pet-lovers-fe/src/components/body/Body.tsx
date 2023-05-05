import { FC } from "react";
import { PetFacts } from "./pet-facts/PetFacts";
import { Gallery } from "./gallery/Gallery";
import "./Body.less";

export const Body: FC = () => {
  return (
    <div className="body">
      <PetFacts></PetFacts>
      <Gallery></Gallery>
    </div>
  );
};

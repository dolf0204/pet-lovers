import { FC } from "react";
import { Cat } from "./cat/Cat";
import "./PetFacts.less";
import { Dog } from "./dog/Dog";

export const PetFacts: FC = () => {
  return (
    <div className="pet-facts">
      <h1 className="pet-facts-title">Daily pet facts - Love!</h1>
      <Cat></Cat>
      <Dog></Dog>
    </div>
  );
};

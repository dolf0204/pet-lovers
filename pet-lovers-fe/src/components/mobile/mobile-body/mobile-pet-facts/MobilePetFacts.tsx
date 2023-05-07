import { FC } from "react";
import "./MobilePetFacts.less";
import { MobileCat } from "./mobile-cat/MobileCat";
import { MobileDog } from "./mobile-dog/MobileDog";

export const MobilePetFacts: FC = () => {
  return (
    <div className="mobile-pet-facts">
      <h1 className="mobile-pet-facts-title">Daily pet facts - Love!</h1>
      <MobileCat></MobileCat>
      <MobileDog></MobileDog>
    </div>
  );
};

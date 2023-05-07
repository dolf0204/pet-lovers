import { FC } from "react";
import "./MobileFooter.less";
import { MobileBrand } from "./mobile-brand/MobileBrand";
import { MobileContact } from "./mobile-contact-us/MobileContact";
import { MobileCopyWright } from "./mobile-copywright/MobileCopyWright";
import { MobilePetFactsCom } from "./mobile-pet-facts-com/MobilePetFactsCom";

export const MobileFooter: FC = () => {
  return (
    <div className="mobile-footer">
      <div className="mobile-footer-information">
        <MobilePetFactsCom></MobilePetFactsCom>
        <MobileBrand></MobileBrand>
        <MobileContact></MobileContact>
      </div>
      <div className="mobile-footer-copywright">
        <MobileCopyWright></MobileCopyWright>
      </div>
    </div>
  );
};

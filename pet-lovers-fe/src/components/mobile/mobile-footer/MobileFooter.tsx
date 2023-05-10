import { FC } from "react";
import "./MobileFooter.less";
import { MobileBrand } from "./mobile-brand/MobileBrand";
import { MobileContact } from "./mobile-contact-us/MobileContact";
import { MobilePetFactsCom } from "./mobile-pet-facts-com/MobilePetFactsCom";
import { MobileCopyright } from "./mobile-copyright/MobileCopyright";

export const MobileFooter: FC = () => {
  return (
    <div className="mobile-footer">
      <div className="mobile-footer-information">
        <MobilePetFactsCom></MobilePetFactsCom>
        <MobileBrand></MobileBrand>
        <MobileContact></MobileContact>
      </div>
      <div className="mobile-footer-copyright">
        <MobileCopyright></MobileCopyright>
      </div>
    </div>
  );
};

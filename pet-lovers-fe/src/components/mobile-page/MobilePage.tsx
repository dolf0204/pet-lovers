import { FC } from "react";
// import "./SiteContent.css";
import { CookieBanner } from "../../common/components/cookie-banner/CookieBanner";
import { MobileBody } from "../mobile/mobile-body/MobileBody";
import { MobileFooter } from "../mobile/mobile-footer/MobileFooter";
import { MobileHeader } from "../mobile/mobile-header/MobileHeader";

const MobilePage: FC = () => {
  return (
    <>
      <CookieBanner width={300}></CookieBanner>
      <MobileHeader></MobileHeader>
      <MobileBody></MobileBody>
      <MobileFooter></MobileFooter>
    </>
  );
};

export default MobilePage;

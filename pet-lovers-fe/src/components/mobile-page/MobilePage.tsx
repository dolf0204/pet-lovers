import { FC } from "react";
import { MobileBody } from "../mobile/mobile-body/MobileBody";
import { MobileFooter } from "../mobile/mobile-footer/MobileFooter";
import { MobileHeader } from "../mobile/mobile-header/MobileHeader";

const MobilePage: FC = () => {
  return (
    <>
      <MobileHeader></MobileHeader>
      <MobileBody></MobileBody>
      <MobileFooter></MobileFooter>
    </>
  );
};

export default MobilePage;

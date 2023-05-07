import { FC } from "react";

import { Layout } from "antd";

import "./SiteContent.css";
import { MobileFooter } from "../mobile/mobile-footer/MobileFooter";
import { MobileHeader } from "../mobile/mobile-header/MobileHeader";
import { MobileBody } from "../mobile/mobile-body/MobileBody";

const { Content } = Layout;

export const MobileContent: FC = () => {
  return (
    <Content className="content">
      {/* <CookieBanner></CookieBanner> */}
      <MobileHeader></MobileHeader>
      <MobileBody></MobileBody>
      <MobileFooter></MobileFooter>
    </Content>
  );
};

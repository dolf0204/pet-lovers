import { FC } from "react";

import { Layout } from "antd";

import "./SiteContent.css";
import { MobileBody } from "../mobile/mobile-body/MobileBody";
import { MobileFooter } from "../mobile/mobile-footer/MobileFooter";
import { MobileHeader } from "../mobile/mobile-header/MobileHeader";

const { Content } = Layout;

export const MobileContent: FC = () => {
  return (
    <Content className="content">
      <MobileHeader></MobileHeader>
      <MobileBody></MobileBody>
      <MobileFooter></MobileFooter>
    </Content>
  );
};

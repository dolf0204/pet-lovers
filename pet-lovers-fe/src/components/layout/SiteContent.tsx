import { FC } from "react";

import { Layout } from "antd";
import { Body } from "../body/Body";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./SiteContent.css";
import { CookieBanner } from "../../common/components/cookie-banner/CookieBanner";

const { Content } = Layout;

export const SiteContent: FC = () => {
  return (
    <Content className="content">
      <CookieBanner width={600}></CookieBanner>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </Content>
  );
};

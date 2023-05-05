import { FC } from "react";

import { Layout } from "antd";
import { Body } from "../body/Body";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

const { Content } = Layout;

export const SiteContent: FC = () => {
  return (
    <Content
      className=""
      style={{
        minHeight: "100vh",
      }}
    >
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </Content>
  );
};

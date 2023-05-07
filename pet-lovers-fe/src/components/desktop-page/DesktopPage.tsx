import { FC } from "react";

import { Body } from "../body/Body";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
// import "./SiteContent.css";
import { CookieBanner } from "../../common/components/cookie-banner/CookieBanner";

const DesktopPage: FC = () => {
  return (
    <>
      <CookieBanner width={600}></CookieBanner>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};

export default DesktopPage;

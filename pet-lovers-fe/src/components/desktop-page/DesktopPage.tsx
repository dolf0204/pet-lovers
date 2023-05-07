import { FC } from "react";
import { Body } from "../body/Body";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

const DesktopPage: FC = () => {
  return (
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};

export default DesktopPage;

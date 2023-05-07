import { FC } from "react";
import { Layout } from "antd";
import "./Router.less";
import { useWindowSizeHook } from "../../common/hooks/useWindowSizeHook";
import { RESPONSIVE_BREAKPOINTS } from "../../constants/constants";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DesktopPage } from "../desktop-page";
import { MobilePage } from "../mobile-page";
import { SiteContent } from "../layout/SiteContent";
import { PetAdopters } from "../pet-adopters";

export const Router: FC = () => {
  const { windowWidth } = useWindowSizeHook();
  return (
    <BrowserRouter>
      <Layout>
        {windowWidth <= RESPONSIVE_BREAKPOINTS.md ? (
          <Layout className="mobile-size">
            {/* <MobilePage /> */}
            <SiteContent />
          </Layout>
        ) : (
          <Layout className="desktop-size">
            <SiteContent />

            {/* <DesktopPage /> */}
          </Layout>
        )}
      </Layout>
    </BrowserRouter>
  );
};

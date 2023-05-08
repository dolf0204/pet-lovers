import { FC } from "react";
import { Layout } from "antd";
import "./Router.less";
import { useWindowSizeHook } from "../../common/hooks/useWindowSizeHook";
import { RESPONSIVE_BREAKPOINTS } from "../../constants/constants";
import { BrowserRouter } from "react-router-dom";
import { SiteContent } from "../layout/SiteContent";

export const Router: FC = () => {
  const { windowWidth } = useWindowSizeHook();
  return (
    <BrowserRouter>
      <Layout>
        {windowWidth <= RESPONSIVE_BREAKPOINTS.md ? (
          <Layout className="mobile-size">
            <SiteContent />
          </Layout>
        ) : (
          <Layout className="desktop-size">
            <SiteContent />
          </Layout>
        )}
      </Layout>
    </BrowserRouter>
  );
};

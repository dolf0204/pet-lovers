import { FC, useEffect } from "react";
import { Layout } from "antd";
import "./Router.less";
import { useWindowSizeHook } from "../../common/hooks/useWindowSizeHook";
import { SiteContent } from "../layout/SiteContent";
import { RESPONSIVE_BREAKPOINTS } from "../../constants/constants";
import { MobileContent } from "../layout/MobileContent";

export const Router: FC = () => {
  const { windowWidth } = useWindowSizeHook();

  useEffect(() => {
    debugger;
    console.log(windowWidth);
  }, [windowWidth]);

  return (
    <Layout>
      {windowWidth <= RESPONSIVE_BREAKPOINTS.md ? (
        <Layout className="mobile-size">
          <MobileContent />
        </Layout>
      ) : (
        <Layout className="desktop-size">
          <SiteContent />
        </Layout>
      )}
    </Layout>
  );
};

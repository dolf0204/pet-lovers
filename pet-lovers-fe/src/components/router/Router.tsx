import { FC } from "react";
import { Layout } from "antd";
import "./Router.less";
import { useWindowSizeHook } from "../../common/hooks/useWindowSizeHook";
import { SiteContent } from "../layout/SiteContent";
import { RESPONSIVE_BREAKPOINTS } from "../../constants/constants";
import { MobileContent } from "../layout/MobileContent";

export const Router: FC = () => {
  const { windowWidth } = useWindowSizeHook();

  return (
    <Layout>
      {windowWidth <= RESPONSIVE_BREAKPOINTS.sm ? (
        <Layout className="desktop-size">
          {/* <MobileContent /> */}
          <SiteContent />
        </Layout>
      ) : (
        <Layout className="mobile-size">
          {/* <SiteContent /> */}
          <MobileContent />
        </Layout>
      )}
    </Layout>
  );
};

import { FC } from "react";

import { Layout } from "antd";

import "./Router.less";
// import { useWindowSizeHook } from "../../common/hooks/useWindowSizeHook";
import { SiteContent } from "../layout/SiteContent";
// import { RESPONSIVE_BREAKPOINTS } from "../../constants/constants";

export const Router: FC = () => {
  // const { windowWidth } = useWindowSizeHook();

  return (
    <Layout className="desktop-size">
      {/* {windowWidth <= RESPONSIVE_BREAKPOINTS.sm ? (
        <Layout className="mobile-size">
          <SiteContent />
        </Layout>
      ) : (
        <Layout className="desktop-size"> */}
      <SiteContent />
      {/* </Layout>
      )} */}
    </Layout>
  );
};

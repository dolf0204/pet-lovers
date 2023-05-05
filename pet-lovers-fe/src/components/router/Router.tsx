import { FC } from "react";

import { Layout } from "antd";

// import "./AppRouter.less";

import { RESPONSIVE_BREAKPOINTS } from "../../constants/resoponsiveBreakpoints";
import { useWindowSizeHook } from "../../common/hooks/useWindowSizeHook";
import { SiteContent } from "../layout/SiteContent";

export const Router: FC = () => {
  const { windowWidth } = useWindowSizeHook();

  return (
    <Layout>
      {windowWidth >= RESPONSIVE_BREAKPOINTS.lg ? (
        <Layout className="mobile-size">
          <SiteContent />
        </Layout>
      ) : (
        <div>
          <SiteContent />
        </div>
      )}
    </Layout>
  );
};

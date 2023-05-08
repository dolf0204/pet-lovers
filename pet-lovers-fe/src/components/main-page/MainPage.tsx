import { FC } from "react";
import { useWindowSizeHook } from "../../common/hooks/useWindowSizeHook";
import { RESPONSIVE_BREAKPOINTS } from "../../constants/constants";
import { Layout } from "antd";
import { DesktopPage } from "../desktop-page";
import { MobilePage } from "../mobile-page";

const { Content } = Layout;
const MainPage: FC = () => {
  const { windowWidth } = useWindowSizeHook();

  return (
    <Content className="content">
      {windowWidth <= RESPONSIVE_BREAKPOINTS.md ? (
        <MobilePage />
      ) : (
        <DesktopPage />
      )}
    </Content>
  );
};

export default MainPage;

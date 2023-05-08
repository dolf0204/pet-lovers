import "./App.less";
import { CookieBanner } from "./common/components/cookie-banner/CookieBanner";
import { Router } from "./components/router/Router";
import { useWindowSizeHook } from "./common/hooks/useWindowSizeHook";
import { RESPONSIVE_BREAKPOINTS } from "./constants/constants";

function App() {
  const { windowWidth } = useWindowSizeHook();

  return (
    <>
      <CookieBanner
        width={windowWidth <= RESPONSIVE_BREAKPOINTS.md ? 300 : 600}
      ></CookieBanner>
      <Router></Router>
    </>
  );
}

export default App;

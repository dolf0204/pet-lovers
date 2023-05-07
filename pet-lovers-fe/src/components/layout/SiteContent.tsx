import { FC, Suspense } from "react";
import { Layout } from "antd";
import "./SiteContent.css";
import { Routes, Route } from "react-router-dom";
import { DesktopPage } from "../desktop-page";
import { PetAdopters } from "../pet-adopters";
import { MainPage } from "../main-page";

const { Content } = Layout;

export const SiteContent: FC = () => {
  return (
    <Content className="content">
      <Suspense>
        <Routes>
          {/* <Route path="/" element={<DesktopPage />} /> */}
          <Route path="/" element={<MainPage />} />

          <Route path="/pet-adopters" element={<PetAdopters />} />
        </Routes>
      </Suspense>
    </Content>
  );
};

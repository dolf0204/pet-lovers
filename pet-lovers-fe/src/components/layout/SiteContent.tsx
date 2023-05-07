import { FC } from "react";
import { Layout } from "antd";
import "./SiteContent.css";
import { Routes, Route } from "react-router-dom";
import { DesktopPage } from "../desktop-page";
import { PetAdopters } from "../pet-adopters";

const { Content } = Layout;

export const SiteContent: FC = () => {
  return (
    <Content className="content">
      <Routes>
        <Route path="/" element={<DesktopPage />} />
        <Route path="/pet-adopters" element={<PetAdopters />} />
      </Routes>
    </Content>
  );
};

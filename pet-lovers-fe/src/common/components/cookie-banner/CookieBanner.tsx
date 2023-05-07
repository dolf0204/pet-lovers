import { FC } from "react";
import "./CookieBanner.less";
import { ModalComponent } from "../modal/Modal";
import { useCookieBanner } from "./useCookieBanner";
import { CookieModal } from "./cookie-modal/CookieModal";

interface IProps {
  width: number;
}

export const CookieBanner: FC<IProps> = ({ width }) => {
  const { isModalVisible, closeModal } = useCookieBanner();

  return (
    <div className="cookie-banner">
      {isModalVisible && (
        <ModalComponent
          onCancel={closeModal}
          title=""
          visible={true}
          width={width}
          closable={true}
          className="cookie-banner-modal"
          content={<CookieModal onSubmit={closeModal} />}
        />
      )}
    </div>
  );
};

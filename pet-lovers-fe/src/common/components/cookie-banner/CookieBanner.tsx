import { FC } from "react";
import { ModalComponent } from "../modal/Modal";
import { CookieModal } from "./cookie-modal/CookieModal";

interface IProps {
  width: number;
  closeModal: () => void;
}

export const CookieBanner: FC<IProps> = ({ width, closeModal }) => {
  return (
    <div className="cookie-banner">
      <ModalComponent
        onCancel={closeModal}
        title=""
        visible={true}
        width={width}
        closable={true}
        className="cookie-banner-modal"
        content={<CookieModal onSubmit={closeModal} />}
      />
    </div>
  );
};

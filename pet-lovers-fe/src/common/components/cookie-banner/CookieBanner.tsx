import { FC } from "react";
import { ModalComponent } from "../modal/Modal";
import { CookieModal } from "./cookie-modal/CookieModal";
import { useCookieBanner } from "./useCookieBanner";

interface IProps {
  width: number;
}

export const CookieBanner: FC<IProps> = ({ width }) => {
  const { handleAccept, showBanner } = useCookieBanner();

  return (
    <div className="cookie-banner">
      {showBanner && (
        <ModalComponent
          onCancel={handleAccept}
          title=""
          visible={true}
          width={width}
          closable={true}
          className="cookie-banner-modal"
          content={<CookieModal onSubmit={handleAccept} />}
        />
      )}
    </div>
  );
};

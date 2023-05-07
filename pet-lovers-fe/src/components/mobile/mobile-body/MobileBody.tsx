import { FC } from "react";
import { MobilePetFacts } from "./mobile-pet-facts/MobilePetFacts";
import "./MobileBody.less";
import { MobileGallery } from "./mobile-gallery/MobileGallery";
import { Button } from "antd";
import { ModalComponent } from "../../../common/components/modal/Modal";
import { InputFormModal } from "../../body/input-form/InputFormModal";
import { useBody } from "../../body/useBody";

export const MobileBody: FC = () => {
  const { openModal, closeModal, isModalVisible, onSubmit } = useBody();
  return (
    <div className="mobile-body">
      <MobilePetFacts></MobilePetFacts>
      <MobileGallery></MobileGallery>
      <div className="mobile-adopt-pet-button-container">
        <Button onClick={openModal} className="mobile-adopt-a-pet-button">
          <h2>Adopt a pet</h2>
        </Button>
      </div>

      {isModalVisible && (
        <ModalComponent
          title="Adopt a pet!"
          visible={isModalVisible}
          width={300}
          closable={true}
          onCancel={closeModal}
          content={
            <InputFormModal
              onCancel={closeModal}
              onSubmit={onSubmit}
            ></InputFormModal>
          }
        />
      )}
    </div>
  );
};

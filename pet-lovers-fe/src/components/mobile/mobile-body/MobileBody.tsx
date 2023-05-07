import { FC } from "react";
import { MobilePetFacts } from "./mobile-pet-facts/MobilePetFacts";
// import { PetFacts } from "./pet-facts/PetFacts";
// import { Gallery } from "./gallery/Gallery";
import "./MobileBody.less";
// import { ModalComponent } from "../../common/components/modal/Modal";
// import { useBody } from "./useBody";
// import { Button } from "antd";
// import { InputFormModal } from "./input-form/InputFormModal";

export const MobileBody: FC = () => {
  // const { openModal, closeModal, isModalVisible, onSubmit } = useBody();
  return (
    <div className="mobile-body">
      <MobilePetFacts></MobilePetFacts>
      {/*<Gallery></Gallery>
      <div className="adopt-pet-button-container">
        <Button onClick={openModal} className="adopt-a-pet-button">
          <h2>Adopt a pet</h2>
        </Button>
      </div>

      {isModalVisible && (
        <ModalComponent
          title="Adopt a pet!"
          visible={isModalVisible}
          width={600}
          closable={true}
          onCancel={closeModal}
          content={
            <InputFormModal
              onCancel={closeModal}
              onSubmit={onSubmit}
            ></InputFormModal>
          }
        />
      )} */}
    </div>
  );
};

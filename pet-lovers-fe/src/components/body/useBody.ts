import { useCallback, useState } from "react";
import { Form } from "antd";
import { openNotification } from "../../common/notification/openNotification";
import { IAdopt } from "../models/IAdopt";
import { petOptions } from "./input-form/constants/petOptions";

export const useBody = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const transformPetResponse = (petId: number) => {
    return petOptions.find((pet) => pet.id === petId)?.label;
  };

  const onSubmit = (values: IAdopt<number>) => {
    debugger;
    console.log(values);
    openNotification(
      "Congratulations",
      `You have succesefully adopted a ${
        transformPetResponse(values.pet) ?? "pet"
      }!`
    );
    setIsModalVisible(false);

    console.log("submit");
  };

  return {
    form,
    closeModal,
    openModal,
    isModalVisible,
    onSubmit,
  };
};

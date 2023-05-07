import { useCallback, useState } from "react";
import { Form } from "antd";
import { openNotification } from "../../common/notification/openNotification";
import { IAdopt } from "../models/IAdopt";
import { petOptions } from "./input-form/constants/petOptions";
import { useApi } from "../../common/hooks/useApiRequest";

export const useBody = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { httpPostPetAdopter } = useApi();

  const openModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const transformPetResponse = (petId: number) => {
    return petOptions.find((pet) => pet.id === petId)?.label;
  };

  const postPetAdopter = useCallback(async (values: IAdopt<string>) => {
    const response = await httpPostPetAdopter(values);
    if (response) {
      return response;
    }
  }, []);

  const onSubmit = async (values: IAdopt<number>) => {
    const pet = transformPetResponse(values.pet);
    const newAdopter = await postPetAdopter({ ...values, pet: pet || "" });
    if (newAdopter !== null) {
      openNotification(
        "Congratulations",
        `You have succesefully adopted a ${
          transformPetResponse(values.pet) ?? "pet"
        }!`
      );
      setIsModalVisible(false);
    }
  };

  return {
    form,
    closeModal,
    openModal,
    isModalVisible,
    onSubmit,
  };
};

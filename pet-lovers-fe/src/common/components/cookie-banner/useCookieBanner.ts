import { Form } from "antd";
import { useCallback, useState } from "react";
const { useForm } = Form;

export const useCookieBanner = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const [form] = useForm();
  const closeModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);
  return {
    form,
    isModalVisible,
    closeModal,
  };
};

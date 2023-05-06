import { petOptions } from "./constants/petOptions";
import { Form } from "antd";
const { useForm } = Form;

export const useInputFormModal = () => {
  const [form] = useForm();

  return {
    form,
    petOptions,
  };
};

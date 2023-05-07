import { FC, useEffect } from "react";
import { Button, Col, Form, Row } from "antd";
import { FORM_LAYOUT } from "./constants/formLayout";
import { INPUT_FORM_FIELDS } from "./constants/inputFormFieldNames";
import { Input } from "../../../common/components/input";
import { Select } from "../../../common/components/select/Select";
import { useInputFormModal } from "./useInputFormModal";
import { IAdopt } from "../../models/IAdopt";

const { Item } = Form;

interface IProps {
  onSubmit: (value: IAdopt<number>) => void;
  onCancel: () => void;
}

export const InputFormModal: FC<IProps> = ({ onSubmit, onCancel }) => {
  const { petOptions, form } = useInputFormModal();

  useEffect(() => {
    form.resetFields();
  }, []);

  return (
    <>
      <Form
        form={form}
        name={INPUT_FORM_FIELDS.FORM_NAME}
        {...FORM_LAYOUT}
        onFinish={onSubmit}
      >
        <Col span={24}>
          <Item
            name={INPUT_FORM_FIELDS.NAME.name}
            rules={[
              {
                required: true,
                message: INPUT_FORM_FIELDS.NAME.message,
              },
            ]}
          >
            <Input label={INPUT_FORM_FIELDS.NAME.label} required />
          </Item>
          <Item
            name={INPUT_FORM_FIELDS.EMAIL.name}
            rules={[
              {
                required: true,
                message: INPUT_FORM_FIELDS.EMAIL.required_message,
              },
              {
                type: "email",
                message: INPUT_FORM_FIELDS.EMAIL.invalid_email,
              },
            ]}
          >
            <Input label={INPUT_FORM_FIELDS.EMAIL.label} required></Input>
          </Item>

          <Item
            name={INPUT_FORM_FIELDS.PET.name}
            rules={[
              {
                required: true,
                message: INPUT_FORM_FIELDS.PET.message,
              },
            ]}
          >
            <Select
              required
              label={INPUT_FORM_FIELDS.PET.label}
              options={petOptions}
            />
          </Item>
        </Col>
        <Row gutter={[20, 10]} justify="center">
          <Col xs={24} sm={6}>
            <Button htmlType="submit">Adopt!</Button>
          </Col>
          <Col xs={24} sm={6}>
            <Button htmlType="button" onClick={onCancel}>
              {"Cancel :("}
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

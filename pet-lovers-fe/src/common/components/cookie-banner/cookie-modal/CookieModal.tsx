import { FC } from "react";
import { FORM_LAYOUT } from "../../../../components/body/input-form/constants/formLayout";
import { Button, Col, Form, Image, Row } from "antd";
import "./CookieModal.less";

import { cookieBanner } from "../../../../assets/images";

interface IProps {
  onSubmit: () => void;
}

export const CookieModal: FC<IProps> = ({ onSubmit }) => {
  return (
    <>
      <Form {...FORM_LAYOUT} onFinish={onSubmit}>
        <Image src={cookieBanner} preview={false}></Image>
        <p>
          Cookies are small pieces of text sent to your browser by a website you
          visit. They help that website remember information about your visit,
          which can both make it easier to visit the site again and make the
          site more useful to you.
        </p>
        <Row justify="center" className="cookie-submit-button">
          <Col xs={24} sm={6}>
            <Button htmlType="submit">OK</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

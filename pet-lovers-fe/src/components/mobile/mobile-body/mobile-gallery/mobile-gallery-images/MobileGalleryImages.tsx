import { FC } from "react";
import { Col, Form, Image, Row } from "antd";
import { mobileGalleryImages } from "./constants/mobileGalleryImages";

export const MobileGalleryImages: FC = () => {
  return (
    <div className="mobile-gallery-images">
      <Form>
        <Row gutter={[30, 15]}>
          {mobileGalleryImages.map((image) => (
            <Col span={12} key={image.id}>
              <Form.Item>
                <Image src={image.src}></Image>
              </Form.Item>
            </Col>
          ))}
        </Row>
      </Form>
    </div>
  );
};

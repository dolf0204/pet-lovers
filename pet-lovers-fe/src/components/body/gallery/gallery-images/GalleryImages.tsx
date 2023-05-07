import { FC } from "react";
import { galleryImages } from "./constants/galleryImages";
import { Col, Form, Image, Row } from "antd";

export const GalleryImages: FC = () => {
  return (
    <div className="gallery-images">
      <Form>
        <Row gutter={[30, 0]}>
          {galleryImages.map((image) => (
            <Col span={6} key={image.id}>
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

import { FC } from "react";
import { Modal } from "antd";

interface IProps {
  visible: boolean;
  width: number;
  title: string;
  content?: JSX.Element;
  closable?: boolean;
  onCancel: () => void;
}

export const ModalComponent: FC<IProps> = ({
  content,
  title,
  visible,
  width,
  closable = true,
  onCancel,
}) => {
  return (
    <Modal
      centered
      closable={closable}
      width={width}
      open={visible}
      title={title}
      destroyOnClose={true}
      footer={null}
      onCancel={onCancel}
    >
      {content && <div>{content}</div>}
    </Modal>
  );
};

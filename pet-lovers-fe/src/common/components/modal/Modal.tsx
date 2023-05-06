import { FC } from "react";
import { Modal } from "antd";

interface IProps {
  visible: boolean;
  width: number;
  title: string;
  content?: JSX.Element;
  closable?: boolean;
  onCancel: () => void;
  className?: string;
}

export const ModalComponent: FC<IProps> = ({
  content,
  title,
  visible,
  width,
  closable = true,
  onCancel,
  className,
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
      className={className}
    >
      {content && <div>{content}</div>}
    </Modal>
  );
};

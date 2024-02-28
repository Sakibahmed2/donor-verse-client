import { Modal } from "antd";
import { ReactNode } from "react";

type TModal = {
  isModalOpen: boolean;
  handleCancel: () => void;
  children: ReactNode;
  title: string;
  width?: number;
};

const ModalUi = ({
  isModalOpen,
  handleCancel,
  children,
  title,
  width,
}: TModal) => {
  return (
    <>
      <Modal
        className="bg-transparent"
        open={isModalOpen}
        title={title}
        onCancel={handleCancel}
        width={width}
        footer={(_, { CancelBtn }) => (
          <>
            <CancelBtn />
          </>
        )}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalUi;

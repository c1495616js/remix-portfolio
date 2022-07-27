import React from 'react';
import Modal from 'react-modal';

type Props = {
  isOpen: boolean;
};

const BlogModal = ({ isOpen, children }: React.PropsWithChildren<Props>) => {
  if (Modal.defaultStyles.overlay) {
    Modal.defaultStyles.overlay.backgroundColor = '#070406';
  }
  return (
    <Modal
      isOpen={isOpen}
      className="outline-none flex items-center p-4 md:p-8  rounded-2xl my-8"
    >
      {children}
    </Modal>
  );
};

export default BlogModal;

import React, { useState } from "react";

const useToggleModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const toggleModal = (modal) => {
    setModalOpen(!isModalOpen);
    setModalType(modal);
  };

  return { isModalOpen, setModalOpen, modalType, toggleModal };
};

export default useToggleModal;

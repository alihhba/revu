/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, useContext, useState, ReactNode } from "react";

export type modalType =
  | "mobile-menu"
  | "projects-description"
  | ""
  | "kanban_description"
  | "kanban_change_state_mobile"
  | "add_contact"
  | "contact-details";

export interface changeHandlerTypes {
  isModal?: boolean;
  modalType?: modalType;
  data?: any;
}

interface ModalContextProps {
  isModalOpen: boolean;
  modalType: modalType;
  data: any;
  changeModalHandler: ({
    isModal,
    modalType,
    data,
  }: changeHandlerTypes) => void;
}

const defaultValue: ModalContextProps = {
  isModalOpen: false,
  modalType: "",
  data: {},
  changeModalHandler: () => {},
};

const ModalContext = createContext<ModalContextProps>(defaultValue);

interface ModalContextProviderProps {
  children: ReactNode;
}

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<modalType>("");
  const [data, setData] = useState<any>();

  const changeModalHandler = ({
    isModal = false,
    modalType = "",
    data = {},
  }: changeHandlerTypes) => {
    setIsModalOpen(isModal);
    setModalType(modalType);
    setData(data);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        modalType,
        changeModalHandler,
        data,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

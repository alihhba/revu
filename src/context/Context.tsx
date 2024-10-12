/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, ReactNode, useContext, useState } from "react";

interface KanbanContextValue {
  kanbanState: string;
  kanbanHandler: (params: { type: string }) => void;
}

const defaultValue: KanbanContextValue = {
  kanbanState: "pending",
  kanbanHandler: () => {},
};

const kanbanContext = createContext(defaultValue);

interface ModalContextProviderProps {
  children: ReactNode;
}

export const KanbanContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [kanbanState, setKanbanState] = useState("pending");

  const kanbanHandler: KanbanContextValue["kanbanHandler"] = ({ type }) => {
    setKanbanState(type);
  };

  return (
    <kanbanContext.Provider value={{ kanbanState, kanbanHandler }}>
      {children}
    </kanbanContext.Provider>
  );
};

export const useKanban = () => useContext(kanbanContext);

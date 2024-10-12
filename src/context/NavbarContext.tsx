/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement,
} from "react";

export interface changeHandlerTypes {
  content: ReactElement | null;
}

interface NavbarContextProps {
  content: ReactElement | null;
  contentUnderNavbar: ReactElement | null;
  changeNavbarDesktopHandler: ({
    content,
    type,
    contentUnderNavbar,
    desktopTitle,
    classname,
  }: {
    content?: any;
    contentUnderNavbar?: any;
    type?: 1 | 2;
    desktopTitle?: string;
    classname?: string | undefined;
  }) => void;
  ChangeMobileTitleHandler: ({
    state,
    type,
  }: {
    state?: any;
    type?: 1 | 2 | 3;
  }) => void;
  resetNavbar: () => void;
  mobileTitle: any;
  mobileNavbarType: number;
  desktopNavType: number;
  desktopTitleNav: string;
  classname: string | undefined;
}

const defaultValue: NavbarContextProps = {
  content: null,
  contentUnderNavbar: null,
  changeNavbarDesktopHandler: () => {},
  ChangeMobileTitleHandler: () => {},
  resetNavbar: () => {},
  mobileTitle: null,
  mobileNavbarType: 1,
  desktopNavType: 1,
  desktopTitleNav: "",
  classname: "",
};

const NavbarContext = createContext<NavbarContextProps>(defaultValue);

interface NavbarContextProviderProps {
  children: ReactNode;
}

export const NavbarContextProvider = ({
  children,
}: NavbarContextProviderProps) => {
  const [content, setContent] = useState<ReactElement | null>(null);
  const [contentUnderNavbar, setContentUnderNavbar] =
    useState<ReactElement | null>(null);
  const [mobileTitle, setMobileTitle] = useState<any>("");
  const [mobileNavbarType, setMobileNavbarType] = useState<number>(1);
  const [desktopNavType, setDesktopNavType] = useState<number>(1);
  const [desktopTitleNav, setDesktopTitleNav] = useState<string>("");
  const [classname, setClassname] = useState<string>("");

  const changeNavbarDesktopHandler = ({
    content,
    type,
    desktopTitle,
    contentUnderNavbar,
    classname,
  }: {
    content?: any;
    type?: 1 | 2;
    desktopTitle?: string;
    classname?: string;
    contentUnderNavbar?: any;
  }) => {
    if (content !== undefined) {
      setContent(content);
    }
    if (contentUnderNavbar !== undefined) {
      setContentUnderNavbar(contentUnderNavbar);
    }
    if (type !== undefined) {
      setDesktopNavType(type);
    }
    if (desktopTitle !== undefined) {
      setDesktopTitleNav(desktopTitle);
    }
    if (classname !== undefined) {
      setClassname(classname);
    }
  };

  const ChangeMobileTitleHandler = ({
    state,
    type,
  }: {
    state?: any;
    type?: 1 | 2 | 3;
  }) => {
    if (state !== undefined) {
      setMobileTitle(state);
    }
    if (type !== undefined) {
      setMobileNavbarType(type);
    }
  };

  const resetNavbar = () => {
    setContent(null);
    setContentUnderNavbar(null);
    setMobileTitle("");
    setMobileNavbarType(1);
    setDesktopNavType(1);
    setDesktopTitleNav("");
    setClassname("");
  };

  return (
    <NavbarContext.Provider
      value={{
        changeNavbarDesktopHandler,
        content,
        contentUnderNavbar,
        ChangeMobileTitleHandler,
        resetNavbar,
        mobileTitle,
        mobileNavbarType,
        desktopNavType,
        desktopTitleNav,
        classname,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext);

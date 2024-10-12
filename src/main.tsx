import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import { ModalContextProvider } from "./context/ModalContext.tsx";
import { NavbarContextProvider } from "./context/NavbarContext.tsx";
import "./index.css";
import ModalProviders from "./provider/ModalProvider.tsx";
import { KanbanContextProvider } from "./context/Context.tsx";
import { CalenderProvider } from "./context/CalenderContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <KanbanContextProvider>
        <NavbarContextProvider>
          <ModalContextProvider>
            <CalenderProvider>
              <App />
            </CalenderProvider>
            <ModalProviders />
          </ModalContextProvider>
        </NavbarContextProvider>
      </KanbanContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

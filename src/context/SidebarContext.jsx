import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();
const SidebarProvider = ({ children }) => {
  const [close, setClose] = useState(false);
  return (
    <SidebarContext.Provider
      value={{
        close,
        setClose,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;

const useSidebar = () => {
  const sidebarCtx = useContext(SidebarContext);
  if (!sidebarCtx)
    throw new Error("useSidebar must be used within a SidebarProvider");
  return sidebarCtx;
};

export { SidebarProvider, useSidebar };

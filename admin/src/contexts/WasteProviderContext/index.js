import { createContext } from "react";

const WasteProviderContext = createContext({});

const WasteProviderContextProvider = ({ children }) => {
  return (
    <WasteProviderContext.Provider> {children}</WasteProviderContext.Provider>
  );
};

export default WasteProviderContextProvider;

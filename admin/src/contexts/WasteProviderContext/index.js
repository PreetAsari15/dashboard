import { createContext, useState, useEffect } from "react";
import { Auth } from "aws-amplify";

const WasteProviderContext = createContext({});

const WasteProviderContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [wasteProvider, setWasteProvider] = useState();
  const sub = user?.attributes?.sub;
  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }.then(setUser));
  }, []);

  // useEffect(() => {
  //   DataStore.query(WasteProvider, (w) => w.adminSub.eq(sub)).then(
  //     (wasteProviders) => setWasteProvider(wasteproviders[0])
  //   );
  // }, [sub]);

  return (
    <WasteProviderContext.Provider value={{ wasteProvider }}>
      {children}
    </WasteProviderContext.Provider>
  );
};

export default WasteProviderContextProvider;

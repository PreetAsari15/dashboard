import { createContext, useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useContext } from "react";
const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  // auth user coming from auth module and db user from database
  const [authUser, setAuthUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser);
  }, []);

  const sub = authUser?.attributes?.sub;

  return (
    <AuthContext.Provider value={{ authUser, dbUser, sub }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);

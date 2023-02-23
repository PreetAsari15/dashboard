import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Basket, BasketService } from "../models";
import { useAuthContext } from "./AuthContext";

const BasketContext = createContext({});

const BasketContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext();
  const [wasteprovider, setWasteProvider] = useState(null);
  const [basket, setBasket] = useState(null);

  useEffect(() => {
    DataStore.query(Basket, (a) =>
      a.wasteproviderID.eq(wasteprovider.id).userID.eq(dbUser.id)
    ).then((baskets) => setBasket(baskets[0]));
  }, [dbUser, wasteprovider]);

  const addServiceToBasket = async (service, quantity) => {
    // fetch the existing basket or create new basket
    let theBasket = basket || (await createNewBasket());
  };

  const createNewBasket = async () => {
    const newBasket = await DataStore.save(
      new Basket({ userID: dbUser.id, wasteproviderID: wasteprovider.id })
    );
    setBasket(newBasket);
    return newBasket;
  };
  return (
    <BasketContext.Provider value={{ addServiceToBasket, setWasteProvider }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);

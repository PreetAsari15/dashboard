import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Basket, BasketService } from "../models";
import { useAuthContext } from "./AuthContext";
import WasteProviderDetailsPage from "../screens/WasteProviderDetailsScreen";

const BasketContext = createContext({});

const BasketContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext();
  const [wasteprovider, setWasteProvider] = useState(null);
  const [basket, setBasket] = useState(null);
  const [basketServices, setBasketServices] = useState([]);

  const totalPrice = basketServices.reduce(
    (sum, basketService) =>
      sum + basketService.quantity * basketService.Service.price,
    wasteprovider?.deliveryFee
  );

  useEffect(() => {
    DataStore.query(Basket, (b) =>
      b.wasteproviderID.eq(wasteprovider.id).userID.eq(dbUser.id)
    ).then((baskets) => setBasket(baskets[0]));
  }, [dbUser, wasteprovider]);

  useEffect(() => {
    if (basket) {
      DataStore.query(BasketService, (bs) => bs.basketID.eq(basket.id)).then(
        setBasketServices
      );
    }
  }, [basket]);

  const addServiceToBasket = async (service, quantity) => {
    // fetch the existing basket or create new basket
    let theBasket = basket || (await createNewBasket());

    // create a BasketService item and save to DataStore
    const newService = await DataStore.save(
      new BasketService({ quantity, Service: service, basketID: theBasket.id })
    );
    setBasketServices([...basketServices, newService]);
  };

  const createNewBasket = async () => {
    const newBasket = await DataStore.save(
      new Basket({ userID: dbUser.id, wasteproviderID: wasteprovider.id })
    );
    setBasket(newBasket);
    return newBasket;
  };
  return (
    <BasketContext.Provider
      value={{
        addServiceToBasket,
        setWasteProvider,
        wasteprovider,
        basket,
        basketServices,
        totalPrice,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);

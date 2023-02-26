import { createContext, useContext, useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Order, OrderService, Basket } from "../models";
import { useAuthContext } from "./AuthContext";
import { useBasketContext } from "./BasketContext";

const OrderContext = createContext({});

OrderContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext();
  const { wasteprovider, totalPrice, basketServices, basket } =
    useBasketContext();

  const createOrder = async () => {
    // create order
    const newOrder = await DataStore.save(
      new Order({
        userID: dbUser.id,
        WasteProvider: wasteprovider,
        status: "NEW",
        total: totalPrice,
      })
    );

    // add all the basketServices to the order
    await Promise.all(
      basketServices.map((basketService) =>
        DataStore.save(
          new OrderService({
            quantity: basketService.quantity,
            orderID: newOrder.id,
            Service: basketService.Services,
          })
        )
      )
    );

    // delete basket
    await DataStore.delete(basket);
  };
  return (
    <OrderContext.Provider value={{ createOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);

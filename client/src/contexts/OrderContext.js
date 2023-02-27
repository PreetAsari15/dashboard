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
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    DataStore.query(Order, (o) => o.userID.eq(dbUser.id)).then(setOrders);
  }),
    [dbUser];

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
            Service: basketService.Service,
          })
        )
      )
    );

    // delete basket
    await DataStore.delete(basket);

    setOrders([...orders, newOrder]);
    return newOrder;
  };

  const getOrder = async (id) => {
    const order = await DataStore.query(Order, (o) => o.orderID.eq(id));
    const orderServices = await DataStore.query(OrderService, (os) =>
      os.orderID.eq(id)
    );
    return { ...order, services: orderServices };
  };

  return (
    <OrderContext.Provider value={{ createOrder, orders, getOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);

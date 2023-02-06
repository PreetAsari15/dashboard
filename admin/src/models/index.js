// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NEW": "NEW",
  "DRIVING": "DRIVING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED",
  "ACCEPTED": "ACCEPTED",
  "DECLINED_BY_WASTEPROVIDER": "DECLINED_BY_WASTEPROVIDER"
};

const { OrderService, Service, Order, WasteProvider, Basket, BasketService, User } = initSchema(schema);

export {
  OrderService,
  Service,
  Order,
  WasteProvider,
  Basket,
  BasketService,
  User,
  OrderStatus
};
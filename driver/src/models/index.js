// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TransportationModes = {
  "TRUCK": "TRUCK",
  "LORRY": "LORRY"
};

const OrderStatus = {
  "NEW": "NEW",
  "DRIVING": "DRIVING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED",
  "ACCEPTED": "ACCEPTED",
  "DECLINED_BY_WASTEPROVIDER": "DECLINED_BY_WASTEPROVIDER"
};

const { Courier, OrderService, Order, BasketService, Service, WasteProvider, Basket, User, BasketServiceService } = initSchema(schema);

export {
  Courier,
  OrderService,
  Order,
  BasketService,
  Service,
  WasteProvider,
  Basket,
  User,
  BasketServiceService,
  TransportationModes,
  OrderStatus
};
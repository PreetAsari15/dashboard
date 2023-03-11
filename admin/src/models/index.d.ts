import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum OrderStatus {
  NEW = "NEW",
  DRIVING = "DRIVING",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED",
  ACCEPTED = "ACCEPTED",
  DECLINED_BY_WASTEPROVIDER = "DECLINED_BY_WASTEPROVIDER"
}



type EagerOrderService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly Service?: Service | null;
  readonly orderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderServiceServiceId?: string | null;
}

type LazyOrderService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly Service: AsyncItem<Service | undefined>;
  readonly orderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderServiceServiceId?: string | null;
}

export declare type OrderService = LazyLoading extends LazyLoadingDisabled ? EagerOrderService : LazyOrderService

export declare const OrderService: (new (init: ModelInit<OrderService>) => OrderService) & {
  copyOf(source: OrderService, mutator: (draft: MutableModel<OrderService>) => MutableModel<OrderService> | void): OrderService;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly WasteProvider?: WasteProvider | null;
  readonly total: number;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly OrderServices?: (OrderService | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderWasteProviderId?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly WasteProvider: AsyncItem<WasteProvider | undefined>;
  readonly total: number;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly OrderServices: AsyncCollection<OrderService>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderWasteProviderId?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerBasketService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasketService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly basketID: string;
  readonly Services?: (BasketServiceService | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBasketService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasketService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly basketID: string;
  readonly Services: AsyncCollection<BasketServiceService>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BasketService = LazyLoading extends LazyLoadingDisabled ? EagerBasketService : LazyBasketService

export declare const BasketService: (new (init: ModelInit<BasketService>) => BasketService) & {
  copyOf(source: BasketService, mutator: (draft: MutableModel<BasketService>) => MutableModel<BasketService> | void): BasketService;
}

type EagerService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price: number;
  readonly wasteproviderID: string;
  readonly basketservices?: (BasketServiceService | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price: number;
  readonly wasteproviderID: string;
  readonly basketservices: AsyncCollection<BasketServiceService>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Service = LazyLoading extends LazyLoadingDisabled ? EagerService : LazyService

export declare const Service: (new (init: ModelInit<Service>) => Service) & {
  copyOf(source: Service, mutator: (draft: MutableModel<Service>) => MutableModel<Service> | void): Service;
}

type EagerWasteProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WasteProvider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating?: number | null;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Services?: (Service | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly adminSub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWasteProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WasteProvider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating?: number | null;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Services: AsyncCollection<Service>;
  readonly Baskets: AsyncCollection<Basket>;
  readonly adminSub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WasteProvider = LazyLoading extends LazyLoadingDisabled ? EagerWasteProvider : LazyWasteProvider

export declare const WasteProvider: (new (init: ModelInit<WasteProvider>) => WasteProvider) & {
  copyOf(source: WasteProvider, mutator: (draft: MutableModel<WasteProvider>) => MutableModel<WasteProvider> | void): WasteProvider;
}

type EagerBasket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Basket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BasketServices?: (BasketService | null)[] | null;
  readonly userID: string;
  readonly wasteproviderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBasket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Basket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BasketServices: AsyncCollection<BasketService>;
  readonly userID: string;
  readonly wasteproviderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Basket = LazyLoading extends LazyLoadingDisabled ? EagerBasket : LazyBasket

export declare const Basket: (new (init: ModelInit<Basket>) => Basket) & {
  copyOf(source: Basket, mutator: (draft: MutableModel<Basket>) => MutableModel<Basket> | void): Basket;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Orders?: (Order | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly sub: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Orders: AsyncCollection<Order>;
  readonly Baskets: AsyncCollection<Basket>;
  readonly sub: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerBasketServiceService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasketServiceService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly basketServiceId?: string | null;
  readonly serviceId?: string | null;
  readonly basketService: BasketService;
  readonly service: Service;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBasketServiceService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasketServiceService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly basketServiceId?: string | null;
  readonly serviceId?: string | null;
  readonly basketService: AsyncItem<BasketService>;
  readonly service: AsyncItem<Service>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BasketServiceService = LazyLoading extends LazyLoadingDisabled ? EagerBasketServiceService : LazyBasketServiceService

export declare const BasketServiceService: (new (init: ModelInit<BasketServiceService>) => BasketServiceService) & {
  copyOf(source: BasketServiceService, mutator: (draft: MutableModel<BasketServiceService>) => MutableModel<BasketServiceService> | void): BasketServiceService;
}
import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBasket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Basket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
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
  readonly lat: string;
  readonly lng: string;
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
  readonly lat: string;
  readonly lng: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}
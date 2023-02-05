// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Service, WasteProvider, Basket, User } = initSchema(schema);

export {
  Service,
  WasteProvider,
  Basket,
  User
};
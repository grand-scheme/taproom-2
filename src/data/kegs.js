// NOTE: until a database is included, this file is here to instantiate preliminary entries in the Keg Inventory. //
import { v4 } from 'uuid' ;

export const kegInventory = [
  { 
    id: v4(), 
    name: "Alpha", 
    brandName: "Get Kegged", 
    price: 4.5, 
    abv: 4.5, 
    inventory: 100
  },
  { 
    id: v4(), 
    name: "Beta", 
    brandName: "Get Kegged", 
    price: 7, 
    abv: 14, 
    inventory: 90
  },
  { 
    id: v4(), 
    name: "Gamma", 
    brandName: "Get Kegged", 
    price: 9, 
    abv: 12, 
    inventory: 55
  },
  { 
    id: v4(), 
    name: "Delta", 
    brandName: "Beveragy Hills", 
    price: 9, 
    abv: 10.5, 
    inventory: 32
  },
  { 
    id: v4(), 
    name: "Epsilon", 
    brandName: "Beveragy Hills", 
    price: 6.5, 
    abv: 6, 
    inventory: 12
  }
];
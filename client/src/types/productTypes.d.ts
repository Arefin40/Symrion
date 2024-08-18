export interface Product {
   _id: string;
   name: string;
   image: string;
   price: number;
   description: string;
   brand: string;
   category: string;
   rating: number;
}

export interface Filters {
   category: string;
   brand: string;
   price: string;
   sort: string;
}

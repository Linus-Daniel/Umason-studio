import { StaticImageData } from "next/image";

export interface Product {
      id: number;
      name: string;
      price:number;
      category: string;
      image:string | StaticImageData;
      description: string;
    }


    export interface CartItem {
      id: number;
      name: string;
      price: number;
      image: string | StaticImageData;
      quantity: number;
    }
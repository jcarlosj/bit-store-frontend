import { Category } from "./category.interface";

export interface Product {
    _id: string;
    reference: string;
    name: string;
    description?: string;
    price: number;
    quantity: number;
    urlImage?: string;
    state: boolean;
    userId?: string;
    category: Category;
    
}

export interface Product{
    id:string;
    name:string;
    description:string;
    stock_quantity:number;
    low_stock_threshold?: number;
}

export let products: Product[] = [];
import { Request, Response } from "express";
import {Product, products} from "../models/product";

import { v4 as uuidv4 } from "uuid";

//CREATE
export const createProduct = (req: Request,res: Response) => {
    
    const {name, description, stock_quantity, low_stock_threshold } = req.body;

    if(!name || !description || stock_quantity === undefined || stock_quantity < 0){
        return res.status(400).json({error: "Invalid Product Data"});
    }

    const product: Product ={
        id:uuidv4(),
        name,
        description,
        stock_quantity,
        low_stock_threshold,

    };

    products.push(product);
    console.log("Product created:", product);
    res.status(201).json(product);
};

//READ
export const getProducts = (req: Request, res: Response) => {
    res.json(products);
};

export const getProductById = (req: Request, res: Response) => {
    console.log("Products:", products);
    console.log("Requested ID:", req.params.id);
    const product = products.find(p => p.id === req.params.id);
    if(!product) return res.status(404).json({error: "Product not found"});
    res.json(product);
};

//UPDATE
export const updateProduct = (req: Request, res: Response) => {
    console.log("Products:", products);
    console.log("Requested ID:", req.params.id);
    const product = products.find(p => p.id === req.params.id);
    if(!product) return res.status(404).json({error: "Product not found"});
    const {name, description, stock_quantity, low_stock_threshold} = req.body;

    if(stock_quantity !== undefined && stock_quantity < 0){
        return res.status(400).json({error: "Stock quantity cannot be negative"});
    }

    product.name = name ?? product.name;
    product.description = description ?? product.description;
    product.stock_quantity = stock_quantity ?? product.stock_quantity;
    product.low_stock_threshold = low_stock_threshold ?? product.low_stock_threshold;

    res.json(product);

};


//DELETE
export const deleteProduct = (req: Request, res: Response) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if(index === -1) return res.status(404).json({error: "Product not found"});

    products.splice(index,1);
    res.status(204).send();
};



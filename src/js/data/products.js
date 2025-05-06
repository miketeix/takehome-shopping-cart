import { Product } from "../models/product";

const inventory = [
    {
        name: "Oranges",
        price: 1.25,
        stock: 5,
        coupons: []},
    {
        name: "Apples",
        price: 2.00,
        stock: 1,
        coupons: []},
    {
        name: "Pears",
        price: 2.39,
        stock: 7,
        coupons: ['B2GO']}
];


export const products = inventory.map(({ name, price, stock, coupons }, index) => 
    new Product(index, name, price, stock, coupons)
)
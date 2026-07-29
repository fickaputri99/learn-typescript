import { promises } from "node:dns";

/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */
type product = {
    productCode: string;
    productName: string;
    price: number;
    stock: number;
    weight: number;
    averagerating: number;
    isDiscount: boolean;
};
const product: product[]=[ {
    productCode: "PRD-001",
    productName: "Mouse",
    price: 150000,
    stock: 120,
    weight: 10,
    averagerating: 4.5,
    isDiscount: true,


} , 
{
    productCode: "PRD-002",
    productName: "Earphone",
    price: 200000,
    stock: 100,
    weight: 15,
    averagerating: 4.4,
    isDiscount: true,
}, 
{
    productCode: "PRD-003",
    productName: "Casing",
    price: 50000,
    stock: 50,
    weight: 10,
    averagerating: 4.5,
    isDiscount: true,
}, 

]
console.log(product);

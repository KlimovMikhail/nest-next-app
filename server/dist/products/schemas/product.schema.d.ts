import * as mongoose from 'mongoose';
export declare type ProductDocument = Product & mongoose.Document;
export declare class Product {
    title: string;
    price: number;
}
export declare const ProductSchema: mongoose.Schema<mongoose.Document<Product, {}>, mongoose.Model<any, any>, undefined>;

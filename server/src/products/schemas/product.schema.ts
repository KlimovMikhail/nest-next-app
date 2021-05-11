import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type ProductDocument = Product & mongoose.Document;

@Schema()
export class Product {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: Number, required: true })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

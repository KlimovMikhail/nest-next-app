import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type CommentDocument = Comment & mongoose.Document;

@Schema()
export class Comment {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  text: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
  productId: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);

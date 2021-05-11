import { Comment, CommentSchema } from './../comments/schemas/comment.schema';
import { ProductsService } from './products.service';
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { CommentsModule } from 'src/comments/comments.module';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    CommentsModule,
  ],
})
export class ProductsModule {}

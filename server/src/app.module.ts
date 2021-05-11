import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    ProductsModule,
    CommentsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/shop'),
  ],
})
export class AppModule {}

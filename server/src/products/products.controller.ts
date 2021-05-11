import { Comment } from './../comments/schemas/comment.schema';
import { CommentsService } from './../comments/comments.service';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(
    private productService: ProductsService,
    private commentService: CommentsService,
  ) {}

  @Get('/')
  getAll(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Product> {
    return this.productService.getById(id);
  }

  @Post('/')
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
    return this.productService.remove(id);
  }

  @Put(':id')
  update(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ): Promise<Product> {
    return this.productService.update(id, updateProductDto);
  }

  @Get(':id/comments')
  getAllCommentsByProductId(@Param('id') id: string): Promise<Comment[]> {
    return this.productService.getAllCommentsByIdProduct(id);
  }
}

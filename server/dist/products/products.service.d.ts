import { CommentDocument, Comment } from './../comments/schemas/comment.schema';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';
export declare class ProductsService {
    private productModel;
    private commentModel;
    constructor(productModel: Model<ProductDocument>, commentModel: Model<CommentDocument>);
    getAll(): Promise<Product[]>;
    getById(id: string): Promise<Product>;
    create(productDto: CreateProductDto): Promise<Product>;
    remove(id: string): Promise<Product>;
    update(id: string, productDto: UpdateProductDto): Promise<Product>;
    getAllCommentsByIdProduct(id: string): Promise<Comment[]>;
}

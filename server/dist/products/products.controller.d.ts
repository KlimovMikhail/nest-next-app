import { Comment } from './../comments/schemas/comment.schema';
import { CommentsService } from './../comments/comments.service';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './schemas/product.schema';
export declare class ProductsController {
    private productService;
    private commentService;
    constructor(productService: ProductsService, commentService: CommentsService);
    getAll(): Promise<Product[]>;
    getOne(id: string): Promise<Product>;
    create(createProductDto: CreateProductDto): Promise<Product>;
    remove(id: string): Promise<Product>;
    update(updateProductDto: UpdateProductDto, id: string): Promise<Product>;
    getAllCommentsByProductId(id: string): Promise<Comment[]>;
}

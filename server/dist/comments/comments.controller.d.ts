import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './schemas/comment.schema';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentsController {
    private readonly commentService;
    constructor(commentService: CommentsService);
    createComment(createCommentDto: CreateCommentDto): Promise<Comment>;
    getOne(id: string): Promise<Comment>;
    remove(id: string): Promise<Comment>;
    update(updateProductDto: UpdateCommentDto, id: string): Promise<Comment>;
}

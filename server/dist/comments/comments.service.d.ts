import { UpdateCommentDto } from './dto/update-comment.dto';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment, CommentDocument } from './schemas/comment.schema';
export declare class CommentsService {
    private commentModel;
    constructor(commentModel: Model<CommentDocument>);
    getAll(): Promise<Comment[]>;
    create(commentDto: CreateCommentDto): Promise<Comment>;
    getById(id: string): Promise<Comment>;
    removeComment(id: string): Promise<Comment>;
    update(id: string, commentDto: UpdateCommentDto): Promise<Comment>;
}

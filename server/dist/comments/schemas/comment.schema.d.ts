import * as mongoose from 'mongoose';
export declare type CommentDocument = Comment & mongoose.Document;
export declare class Comment {
    title: string;
    text: string;
    productId: string;
}
export declare const CommentSchema: mongoose.Schema<mongoose.Document<Comment, {}>, mongoose.Model<any, any>, undefined>;

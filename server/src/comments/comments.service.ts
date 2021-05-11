import { UpdateCommentDto } from './dto/update-comment.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment, CommentDocument } from './schemas/comment.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async getAll(): Promise<Comment[]> {
    return this.commentModel.find();
  }

  async create(commentDto: CreateCommentDto): Promise<Comment> {
    const newComment = new this.commentModel(commentDto);
    return newComment.save();
  }

  async getById(id: string): Promise<Comment> {
    return this.commentModel.findById(id);
  }

  async removeComment(id: string): Promise<Comment> {
    return this.commentModel.findByIdAndDelete(id);
  }

  async update(id: string, commentDto: UpdateCommentDto): Promise<Comment> {
    return this.commentModel.findByIdAndUpdate(id, commentDto, { new: true });
  }
}

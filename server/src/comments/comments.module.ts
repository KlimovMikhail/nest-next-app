import { CommentsService } from './comments.service';
import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './schemas/comment.schema';

@Module({
  providers: [CommentsService],
  controllers: [CommentsController],
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  exports: [CommentsService],
})
export class CommentsModule {}

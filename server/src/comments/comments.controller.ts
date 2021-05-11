import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './schemas/comment.schema';
import { CommentsService } from './comments.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentService: CommentsService) {}

  @Post('/')
  createComment(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Comment> {
    return this.commentService.getById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Comment> {
    return this.commentService.removeComment(id);
  }

  @Put(':id')
  update(
    @Body() updateProductDto: UpdateCommentDto,
    @Param('id') id: string,
  ): Promise<Comment> {
    return this.commentService.update(id, updateProductDto);
  }
}

import { IsNotEmpty } from 'class-validator';

export class UpdateCommentDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly text: string;

  @IsNotEmpty()
  readonly productId: string;
}

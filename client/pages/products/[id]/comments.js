import CommentPage from '../../../components/CommentPage';
import { getAllCommentsByProductId } from '../../../utils/comments';

export default function Comments({comments, productId}) {

  return (
    <CommentPage comments={comments} productId={productId}/>
  )
}

export async function getServerSideProps(ctx) {

  const comments = await getAllCommentsByProductId(ctx.query.id);

  return {
    props: {
      comments,
      productId: ctx.query.id,
    },
  };
}
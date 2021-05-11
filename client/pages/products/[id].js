import ProductItem from "../../components/ProductItem";
import { getOneProduct } from '../../utils/products';

const Product = ({ product }) => {

  return (
    <ProductItem product={product} />
  );
};

export default Product;

export async function getServerSideProps(ctx) {

  const product = await getOneProduct(ctx.query.id);
  return {
    props: {
      product,
    },
  };
}

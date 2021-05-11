/* eslint-disable react/button-has-type */
// /* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { Card, Col, Image, Row } from "antd";
import Link from "next/link";
import { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import MainLayout from "../../layouts/MainLayout";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
} from "../../utils/products";
import styles from "../../styles/styles.module.scss";

const Index = ({ products }) => {
  const [serverProducts, setServerProducts] = useState(products);
  const [inputChange, setInputChange] = useState({title: '', price: ''});
  const [showAdd, setShowAdd] = useState(false);

  const addProduct = async () => {
    const product = {
      title: inputChange.title,
      price: inputChange.price,
    };
    try {
      const newProduct = await createProduct(product);
      setServerProducts([...serverProducts, newProduct]);
      setInputChange({
        title: "",
        price: "",
      });
      setShowAdd(!showAdd);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  const onInputChange = ({ target }) => {
    setInputChange({
      ...inputChange,
      [target.name]: target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    addProduct();
    setInputChange({
      title: "",
      price: "",
    });
  };

  const removeProduct = async (id) => {
    const res = await deleteProduct(id);
    const newArr = serverProducts.filter((product) => product._id !== res._id);
    setServerProducts(newArr);
  };

  return (
    <MainLayout title="Products">
      <div>Products</div>

      <div className="site-card-wrapper">
        <Row gutter={16}>
          {serverProducts.map((p) => (
            <Col key={p._id} span={6} style={{ paddingBottom: 20 }}>
              <Card
                title={p.title}
                bordered={false}
                extra={<DeleteOutlined onClick={() => removeProduct(p._id)} />}
              >
                <Image
                  preview={false}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <p>{p.price}</p>
                <Link href="/products/[id]" as={`/products/${p._id}`}>
                  about product
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {showAdd ? (
        <>
          <form className={styles.form} onSubmit={onFormSubmit}>
            <input
              name="title"
              placeholder="title"
              value={inputChange.title}
              onChange={onInputChange}
            />
            <input
              name="price"
              placeholder="price"
              value={inputChange.price}
              onChange={onInputChange}
            />
            <button>Add</button>
          </form>
        </>
      ) : (
        <button onClick={() => setShowAdd(!showAdd)}>Add product</button>
      )}
    </MainLayout>
  );
};

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
  };
}

export default Index;

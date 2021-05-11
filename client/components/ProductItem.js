/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import { Card, Image } from "antd";
import Link from "next/link";
import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

import styles from "../styles/styles.module.scss";
import { updateProduct } from '../utils/products';

function ProductItem({ product }) {
  const { title, price } = product;
  const [inputChange, setInputChange] = useState({
    isEditing: false,
    title: "",
    price: "",
  });
  const [serverProduct, setServerProduct] = useState(product)

  const onInputChange = ({ target }) => {
    setInputChange({
      ...inputChange,
      [target.name]: target.value,
    });
  };

  const onEditItem = () => {
    setInputChange({
      isEditing: true,
      title,
      price,
    });
  };

  const onSaveChangedItem = () => {
    const updatedProduct = {
      title: inputChange.title, 
      price: inputChange.price
    }
    updateProduct(product._id, updatedProduct)
    setInputChange({
      ...updatedProduct,
      isEditing: false,
    })
    setServerProduct(updatedProduct)
  }

  const inputTitle = (
    <input onChange={onInputChange} name="title" defaultValue={title} />
  );
  const inputPrice = (
    <input onChange={onInputChange} name="price" defaultValue={price} />
  );

  return (
    <MainLayout>
      <Card
        title={inputChange.isEditing ? inputTitle : serverProduct.title}
        bordered={false}
        style={{ width: 300 }}
        hoverable
        className={styles.product}
        extra={
          inputChange.isEditing ? (
            <SaveOutlined onClick={onSaveChangedItem} />
          ) : (
            <EditOutlined onClick={onEditItem} />
          )
        }
      >
        <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        {inputChange.isEditing ? inputPrice : <p>{serverProduct.price}</p>}
        <Link href={`/products/${product._id}/comments`}>
          <a>comments</a>
        </Link>
      </Card>
    </MainLayout>
  );
}

export default ProductItem;

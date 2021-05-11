/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import styles from "../styles/styles.module.scss";
// import "antd/dist/antd.css";
import MainLayout from '../layouts/MainLayout';


const Index = () => (
  <MainLayout title='Home page'>
    <div className={styles.container}>
      <h1> Mega Store </h1>
      <Link href="/products">
        <a className={styles.container__link}> products list </a>
      </Link>
    </div>
  </MainLayout>
);

export default Index;

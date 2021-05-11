import Link from "next/link";
import Head from "next/head";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import styles from "../styles/styles.module.scss";

const { Header, Content } = Layout;

function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
      </Head>
      <Layout className="layout">
        <Header className={styles.header}>
          <div className={`"logo" ${styles.header__logo}`}>
            <Link  href="/">
              <a className={styles.container__link}> Store </a>
            </Link>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["/"]}>
            <Menu.Item key="/">
              <Link href="/">
                <a className={styles.container__link}> Home </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="/products">
              <Link href="/products">
                <a className={styles.container__link}> Products </a>
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <div className="site-layout-content container"> {children} </div>
        </Content>
      </Layout>
    </>
  );
}

export default MainLayout;

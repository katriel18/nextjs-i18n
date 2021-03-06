import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Create Next App </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome</h1>
        <br></br>
        <Link href="/preproducts">
          <a>PreProducts</a>
        </Link>
        <br />
        <Link href="/products">
          <a>Products</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        Powered by OK
      </footer>
    </div>
  );
}

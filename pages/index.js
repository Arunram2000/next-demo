import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arun</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {data.map((d) => (
          <p key={d.id}>
            <Link href={`/post/${d.id}`}>{d.id}</Link>
          </p>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

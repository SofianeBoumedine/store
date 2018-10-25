import Link from "next/link";
import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>Store</title>
    </Head>
    <h1>Hello World!</h1>
    <Link href={"/about"}>
      <a>About page</a>
    </Link>
  </div>
);

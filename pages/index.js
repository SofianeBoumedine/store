import Link from "next/link";
import Head from "next/head";
import withLayout from "../lib/withLayout";

const Index = () => (
  <>
    <Head>
      <title>Store</title>
    </Head>
    <h1>Hello World!</h1>
    <Link href={"/about"}>
      <a>About page</a>
    </Link>
  </>
);

export default withLayout(Index);

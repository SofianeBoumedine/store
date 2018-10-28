import Link from "next/link";
import Head from "next/head";
import PostLink from "../components/PostLink";

export default () => (
  <>
    <Head>
      <title>Store</title>
    </Head>
    <h1>Movies:</h1>
    <ul>
      <li>
        <PostLink title={"something"} id={0} />
      </li>
      <li>
        <PostLink title={"something else"} id={1} />
      </li>
    </ul>
  </>
);

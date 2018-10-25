import Link from "next/link";
import Head from "next/head";
import withLayout from "../lib/withLayout";
import PostLink from "../components/PostLink";

const Index = () => (
  <>
    <Head>
      <title>Store</title>
    </Head>
    <h1>Posts:</h1>
    <ul>
      <li>
        <PostLink title={"something"} />
      </li>
      <li>
        <PostLink title={"something else"} />
      </li>
    </ul>
  </>
);

export default withLayout(Index);

import Head from "next/head";
import { withRouter } from "next/router";
import withLayout from "../lib/withLayout";

const Post = props => (
  <>
    <Head>
      <title>{props.router.query.title} | Store</title>
    </Head>
    <h1>{props.router.query.title}</h1>
    <p>lalalallalalalala</p>
  </>
);

export default withLayout(withRouter(Post));

import Head from "next/head";
import { withRouter } from "next/router";

const Movie = props => (
  <>
    <Head>
      <title>{props.title} | Store</title>
    </Head>
    <h1>{props.title}</h1>
    <p>lalalallalalalala</p>
  </>
);

Movie.getInitialProps = async () => {
  return { title: "somewhere" };
};

export default withRouter(Movie);

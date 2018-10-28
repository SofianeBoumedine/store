import Head from "next/head";
import { withRouter } from "next/router";
import Axios from "axios";

const Movie = props => (
  <>
    <Head>
      <title>{props.movie.title} | Store</title>
    </Head>
    <img src={props.movie.large_cover_image} />
    <h1>{props.movie.title}</h1>
    <p>{props.movie.description_intro}</p>
  </>
);

Movie.getInitialProps = async context => {
  const {
    query: { id }
  } = context;
  const {
    data: {
      data: { movie }
    }
  } = await Axios.get(
    `https://yts.am/api/v2/movie_details.json?movie_id=${id}`
  );
  console.log(movie);
  return { movie };
};

export default withRouter(Movie);

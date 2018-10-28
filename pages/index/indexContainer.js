import { Query } from "react-apollo";
import IndexPresenter from "./IndexPresenter";
import { INDEX_QUERY } from "./indexQueries";

export default () => (
  <Query query={INDEX_QUERY}>
    {({ data }) => <IndexPresenter data={data} />}
  </Query>
);

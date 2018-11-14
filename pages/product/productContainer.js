import { withRouter } from "next/router";
import { Component } from "react";
import ProductPresenter from "./productPresenter";

class ProductContainer extends Component {
  static async getInitialProps(props) {
    const {
      query: { id }
    } = props;
    return {
      id
    };
  }
  render() {
    console.log(this.props.id);
    return <ProductPresenter />;
  }
}

export default withRouter(ProductContainer);

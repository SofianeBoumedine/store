import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragments";

export const INDEX_QUERY = gql`
  {
    categories {
      id
      name
    }
    onSale: products(where: { onSale: true }) {
      ...Productitems
    }
    allProducts: products(where: { onSale: false }) {
      ...Productitems
    }
  }
  ${PRODUCT_FRAGMENT}
`;

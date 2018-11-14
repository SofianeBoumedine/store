import { gql } from "apollo-boost";

export const PRODUCT_FRAGMENT = gql`
  fragment Productitems on Product {
    id
    name
    detail
    price
    photo {
      url
    }
  }
`
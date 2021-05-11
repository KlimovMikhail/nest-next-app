import initialStore from "../../initialStore";
import * as types from "./types";

const productReducer = (state = initialStore.products, { payload, type }) => {
  switch (type) {
    case types.GET_ALL_PRODUCTS: {
      return {
        ...state,
        isFatching: true,
      };
    }

    case types.GET_ALL_PRODUCTS_SUCCESS: {
      return {
        ...state,
        productsList: payload,
        isFatching: false,
      };
    }

    default:
      return state;
  }
};

export default productReducer;

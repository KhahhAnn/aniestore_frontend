import { GET_TO_CART_REQUEST } from "../cart/ActionType";
import { CREATE_ORDER_BY_ADDRESS_FAILURE, CREATE_ORDER_BY_ADDRESS_REQUEST, CREATE_ORDER_BY_ADRESS_SUCCESS, CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";

const initialState = {
   orders: [],
   order: null,
   error: null,
   loading: false,
}

export const orderReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_TO_CART_REQUEST:
         return { ...state, loading: true, error: null };
      case GET_ORDER_BY_ID_SUCCESS:
         return { ...state, loading: false, order: action.payload, error: null };
      case GET_ORDER_BY_ID_FAILURE:
         return { ...state, loading: false, error: action.payload };
      case CREATE_ORDER_REQUEST:
         return { ...state, loading: true, error: null };
      case CREATE_ORDER_SUCCESS:
         return { ...state, loading: false, order: action.payload, error: null };
      case CREATE_ORDER_FAILURE:
         return { ...state, loading: false, error: action.payload };
      case CREATE_ORDER_BY_ADDRESS_REQUEST:
         return { ...state, loading: true, error: null };
      case CREATE_ORDER_BY_ADRESS_SUCCESS:
         return { ...state, loading: false, order: action.payload, error: null };
      case CREATE_ORDER_BY_ADDRESS_FAILURE:
         return { ...state, loading: false, error: action.payload };

      default:
         return state;
   }
}
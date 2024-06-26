import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_TO_CART_FAILURE, GET_TO_CART_REQUEST, GET_TO_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS, UPDATE_CART_TOTAL_FAILURE, UPDATE_CART_TOTAL_REQUEST } from "./ActionType";

const initialState = {
   cart: null,
   loading: false,
   error: null,
   cartItems: []
}

export const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_ITEM_TO_CART_REQUEST:
         return { ...state, loading: true, error: null };
      case ADD_ITEM_TO_CART_SUCCESS:
         return { ...state, loading: false, cartItems: [...state.cartItems, action.payload.cartItems] };
      case ADD_ITEM_TO_CART_FAILURE:
         return { ...state, loading: false, error: action.payload }
      case GET_TO_CART_REQUEST:
         return { ...state, loading: true, error: null }
      case GET_TO_CART_SUCCESS:
         return { ...state, cartItems: action.payload.cartItems, cart: action.payload, loading: false };
      case GET_TO_CART_FAILURE:
         return { ...state, error: action.payload, loading: false };
      case UPDATE_CART_TOTAL_REQUEST:
         return { ...state, loading: true, error: null }
      case UPDATE_CART_ITEM_SUCCESS:
         return { ...state, cartItems: action.payload.cartItems, cart: action.payload, loading: false };
      case UPDATE_CART_TOTAL_FAILURE:
         return { ...state, error: action.payload, loading: false };
      case UPDATE_CART_ITEM_REQUEST:
      case REMOVE_CART_ITEM_REQUEST:
         return { ...state, loading: true };
      case REMOVE_CART_ITEM_SUCCESS:
         return { ...state, cartItems: action.payload, loading: false };
      case UPDATE_CART_ITEM_SUCCESS:
         return { ...state, cartItems: action.payload, loading: false }
      case UPDATE_CART_ITEM_FAILURE:
      case REMOVE_CART_ITEM_FAILURE:
         return {
            ...state,
            error: action.payload,
            loading: false
         }
      default:
         return state;
   }
}
import { api } from "../../config/ApiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_TO_CART_FAILURE, GET_TO_CART_REQUEST, GET_TO_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS, UPDATE_CART_TOTAL_FAILURE, UPDATE_CART_TOTAL_REQUEST, UPDATE_CART_TOTAL_SUCCESS } from "./ActionType"

export const getCart = (page, pageSize) => async (dispatch) => {
   dispatch({type: GET_TO_CART_REQUEST})
   try {
      const {data} = await api.get(`/api/cart?page=${page}&pageSize=${pageSize}`)
      dispatch({type: GET_TO_CART_SUCCESS, payload: data});
   } catch(error) {
      dispatch({type: GET_TO_CART_FAILURE, payload: error.message});
   }
}

export const addItemToCart = (reqData) => async (dispatch) => {
   dispatch({type: ADD_ITEM_TO_CART_REQUEST})
   try {
      const {data} = await api.put("/api/cart/add", reqData)
      dispatch({type: ADD_ITEM_TO_CART_SUCCESS, payload: data});
      console.log("add item complete");
   } catch(error) {
      dispatch({type: ADD_ITEM_TO_CART_FAILURE, payload: error.message});
   }
}


export const removeCartItem = (cartItemId) => async (dispatch) => {
   dispatch({type: REMOVE_CART_ITEM_REQUEST})
   try {
      const {data} =  await api.delete(`/api/cart-items/${cartItemId}`)
      dispatch({type: REMOVE_CART_ITEM_SUCCESS, payload: data});
      console.log("remove complete");
   } catch(error) {
      dispatch({type: REMOVE_CART_ITEM_FAILURE, payload: error.message});
   }
}

export const updateCartItem = (reqData) => async (dispatch) => {
   dispatch({type: UPDATE_CART_ITEM_REQUEST})
   try {
      const {data} = await api.put(`/api/cart-items/${reqData.cartItemId}`, reqData.data)
      dispatch({type: UPDATE_CART_ITEM_SUCCESS, payload: data});
      console.log("update complete");
   } catch(error) {
      dispatch({type: UPDATE_CART_ITEM_FAILURE, payload: error.message});
   }
}

export const updateCartTotal = () => async (dispatch) => {
   dispatch({type: UPDATE_CART_TOTAL_REQUEST})
   try {
      const {data} = await api.get('/api/cart/update-cart-total', )
      dispatch({type: UPDATE_CART_TOTAL_SUCCESS, payload: data});
      console.log("update complete");
   } catch(error) {
      dispatch({type: UPDATE_CART_TOTAL_FAILURE, payload: error.message});
   }
}
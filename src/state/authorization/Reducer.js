import { CHANGE_PASSWORD_REQUEST, GET_TOKEN_FAILURE, GET_TOKEN_REQUEST, GET_TOKEN_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "./ActionType"

const initialState = {
   user: null,
   isLoading: false,
   error: null,
   jwt: null,
   token: null,
}

export const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case REGISTER_REQUEST:
      case LOGIN_REQUEST:
      case GET_USER_REQUEST:
      case UPDATE_USER_REQUEST:
      case CHANGE_PASSWORD_REQUEST:
      case GET_TOKEN_REQUEST:
         return { ...state, isLoading: true, error: null }

      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
         return { ...state, isLoading: false, error: null, jwt: action.payload.jwt, user: action.payload }
      case GET_USER_SUCCESS:
      case UPDATE_USER_SUCCESS:
         return { ...state, isLoading: false, error: null, user: action.payload }
      case GET_TOKEN_SUCCESS:
         return { ...state, isLoading: false, error: null, user: action.payload }

      case REGISTER_FAILURE:
      case LOGIN_FAILURE:
      case GET_USER_FAILURE:
      case UPDATE_USER_FAILURE:
      case GET_TOKEN_FAILURE:
         return { ...state, isLoading: false, error: action.payload }

      case LOGOUT:
         return { ...initialState }

      default:
         return state;

   }
}

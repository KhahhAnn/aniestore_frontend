import axios from "axios"
const jwt = localStorage.getItem('jwt')
export const API_BASE_URL = "http://localhost:8080"

export const apiPermitAll = axios.create({
   baseURL: API_BASE_URL,
   headers: {
      "Content-Type": "application/json"
   }
})

export const api = axios.create({
   baseURL: API_BASE_URL,
   headers: {
      "Authorization" : `Bearer ${jwt}`,
      "Content-Type": "application/json"
   }
})
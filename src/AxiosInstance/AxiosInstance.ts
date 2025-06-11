import axios from "axios";

export const baseUrl = axios.create({
    baseURL: 'https://ecommerce.routemisr.com/api/v1/',
    
  });
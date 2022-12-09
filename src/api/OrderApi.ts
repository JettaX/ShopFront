import {axiosCustom} from "./AxiosConfig";

const orders = axiosCustom('http://localhost:8081/api/orders');

export const getUserOrders = (userId: number) => orders.get(`/getUserOrders/${userId}`);

export const getCountOfBought = (productId: number) => orders.get(`/getCountOfBought/${productId}`);
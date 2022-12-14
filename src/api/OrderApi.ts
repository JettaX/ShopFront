import {axiosCustom} from "./AxiosConfig";
import {getToken} from "../util/TokenUtil";

const orders = axiosCustom('http://localhost:8081/api/orders', getToken());

export const getUserOrders = (userId: number) => orders.get(`/getUserOrders/${userId}`);

export const getCountOfBought = (productId: number) => orders.get(`/getCountOfBought/${productId}`);
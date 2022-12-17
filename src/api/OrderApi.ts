import {axiosCustom} from "./AxiosConfig";
import {getToken} from "../util/TokenUtil";

const orders = axiosCustom('http://localhost:8081/api/orders', getToken());

export const apiGetUserOrders = (userId: number | undefined) => orders.get(`/getUserOrders/${userId}`);

export const apiGetCountOfBought = (productId: number) => orders.get(`/getCountOfBought/${productId}`);
import {axiosCustom} from "./AxiosConfig";
import {getToken} from "../util/TokenUtil";

const orders = axiosCustom('http://localhost:8083/core/api/orders', getToken());

export const apiGetUserOrders = () => orders.get(`/getUserOrders`);

export const apiGetCountOfBought = (productId: number) => orders.get(`/getCountOfBought/${productId}`);

export const apiCreateOrder = () => orders.post("");
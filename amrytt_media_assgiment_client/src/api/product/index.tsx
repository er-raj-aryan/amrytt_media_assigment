import apiClient from "..";
import { endpoint } from "../endpoints";




export const getProducts = async () => {
    try {
        const result = await apiClient.get(endpoint.products);
        return result.data;
    } catch (e) {
        console.error(e)
        throw e;
    }
}

export const createProducts = async (data: {
    product:  string;
    category: string;
    amount:   number;
    status:   string;
}) => {
    try {
        const result = await apiClient.post(endpoint.products,data);
        return result.data;
    } catch (e) {
        console.error(e)
        throw e;
    }
}

export const updateProducts = async (data: {
    _id?:      string;
    product?:  string;
    category?: string;
    amount?:   number;
    status?:   string;
    created?:  Date;
}) => {
    try {
        const result = await apiClient.patch(endpoint.products+"/"+data._id,data);
        return result.data;
    } catch (e) {
        console.error(e)
        throw e;
    }
}

export const deleteProducts = async (data:{
    _id?: string}) => {
    try {
        const result = await apiClient.delete(endpoint.products+"/"+data._id);
        return result.data;
    } catch (e) {
        console.error(e)
        throw e;
    }
}
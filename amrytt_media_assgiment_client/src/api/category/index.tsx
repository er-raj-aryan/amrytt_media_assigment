import apiClient from "..";
import { endpoint } from "../endpoints";




export const getCategories = async () => {
    try {
        const result = await apiClient.get(endpoint.category);
        return result.data;
    } catch (e) {
        console.error(e)
        throw e;
    }
}

export const createCategory= async (data: {
    category: string;
}) => {
    try {
        const result = await apiClient.post(endpoint.category,data);
        return result.data;
    } catch (e) {
        console.error(e)
        throw e;
    }
}

export const updateCategory = async (data: {
    _id?:      string;
    category?: string;
}) => {
    try {
        const result = await apiClient.patch(endpoint.category+"/"+data._id,data);
        return result.data;
    } catch (e) {
        console.error(e)
        throw e;
    }
}

export const deleteCategory = async (data:{
    _id?: string}) => {
    try {
        const result = await apiClient.delete(endpoint.category+"/"+data._id);
        return result.data;
    } catch (e) {
        console.error(e)
        throw e;
    }
}
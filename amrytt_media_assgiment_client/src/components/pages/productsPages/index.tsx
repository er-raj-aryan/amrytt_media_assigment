/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { DataTable } from "@/components/data-table";
import { columns } from "@/utils/data/datatable";
import { Payment } from "@/utils/model/datatable";
import { useEffect, useState } from "react";
import Header from "./header";
import Filter from "./filter";
import EditProduct from "./edit-product";
import * as XLSX from "xlsx";
import { createProducts, deleteProducts, getProducts, updateProducts } from "@/api/product";
import { toast } from "react-toastify";
import { getCategories } from "@/api/category";

export default function ProductsPage() {
  const [data, setData] = useState<Payment[]>([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [editData, setEditData] = useState();
  const [searchString, setSearchString] = useState("");
  const [category, setCategory] = useState<Payment[]>([]);

 
  useEffect(() => {
    async function getData() {
      // Fetch data from your API here.
      try {
        const response = await getProducts();
        const categoryResponse = await getCategories();
        console.log(response);
        setCategory(categoryResponse);
        setData(response);
      } catch (error) {
        console.log("Error", error);
      }
      // active json products
      // setData(productDefault)
    }

    getData();
  }, []);

  const handleAddProduct = async (data: {
    product: string;
    amount: number;
    category: string;
    status: string;
  }) => {
    const tempData = data;
    try {
      const response = await toast.promise(createProducts(tempData), {
        pending: "Adding Product...",
        success: "Product Added Successfully!",
        error: "Error Adding Product!",
      });
      console.log(response);
      setData((prevData) => [...prevData, response]);
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * Handles the deletion of a product from the data list.
   * This function should be implemented to remove a product
   * based on the provided criteria or identifier.
   */

  const handleDeleteProduct = async (data: {
    _id: string;
    product: string;
    amount: number;
    category: string;
    status: string;
  }) => {
    // Implement the logic to delete the product from the data list.
    // You can use the provided data to identify and remove the product.
    // After deleting, update the data list accordingly.
    try{
      const response = await toast.promise(deleteProducts(data), {
        pending: "Deleting Product...",
        success: "Product Deleted Successfully!",
        error: "Error Deleting Product!",
      });
      console.log(response);
      setData((prevData) => prevData.filter((item) => item._id !== data._id));
    } catch(err){
      console.log(err);
    }
   
  };

  const handleEditProduct = (data: {
    _id: string;
    product: string;
    amount: number;
    category: string;
    status: string;
  }) => {
    // @ts-expect-error
    setEditData(data);
    setOpenEdit(true);
  };

  const handleSaveEditProduct = async (data: {
    _id: string;
    product: string;
    amount: number;
    category: string;
    status: string;
  }) => {
    try {
      console.log(data);
      const response = await toast.promise(updateProducts(data), {
        pending: "Updating Product...",
        success: "Product Updated Successfully!",
        error: "Error Updating Product!",
      });
      setOpenEdit(false);

      setData((prevData) =>
        prevData.map((item) =>
          item._id === data._id
            ? { ...data, product: data.product, amount: data.amount }
            : item
        )
      );
      console.log("Product updated:", response);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const getSearchProduct = (search?: string) => {
    if(search === "a-z"){
      const sortedData = [...data].sort((a, b) => a.product.localeCompare(b.product));
      setData(sortedData);
    } else if(search === "0-10"){
      const sortedData = [...data].sort((a, b) => b.amount - a.amount);
      setData(sortedData);
    } 
    else if(search === "clear"){
      const sortedData = [...data].sort((a, b) => new Date(a.created ?? 0).getTime() - new Date(b.created ?? 0).getTime());
      setData(sortedData);
    } else {
      setSearchString(search ? search : "");
    }
  };

  // const handleExportDataClick = () => {

  const downloadExcel = () => {
    // Create a worksheet from the data
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

    // Export the workbook to a file
    XLSX.writeFile(workbook, "data.xlsx");
  };

  return (
    <div className="flex flex-col gap-6">
      <Header
        category={category}
        handleExportData={() => downloadExcel()}
        handleAddProduct={(data: {
          product: string;
          amount: number;
          category: string;
          status: string;
        }) => {
          handleAddProduct(data);
        }}
      />
      <Filter
      category={category}
        handleSearch={(search: string) => {
          getSearchProduct(search);
        }}
      />
      <DataTable
        filterString={searchString}
        columns={columns}
        data={data}
        handleDelete={(data: {
          _id: string;
          product: string;
          amount: number;
          category: string;
          status: string;
        }) => {
          handleDeleteProduct(data);
        }}
        handleEdit={(data: {
          _id: string;
          product: string;
          amount: number;
          category: string;
          status: string;
        }) => {
          handleEditProduct(data);
        }}
      />
      <EditProduct
        category={category}
        editData={
          editData || {
            _id: "",
            product: "",
            amount: 0,
            category: "",
            status: "",
          }
        }
        setOpenEdit={setOpenEdit}
        openEdit={openEdit}
        handleEditProduct={(data: {
          _id: string;
          product: string;
          amount: number;
          category: string;
          status: string;
        }) => {
          handleSaveEditProduct(data);
        }}
      />
    </div>
  );
}

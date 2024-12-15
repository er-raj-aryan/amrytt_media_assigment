/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { DataTable } from "@/components/data-table";
import { columns } from "@/utils/data/datatable";
import { Payment } from "@/utils/model/datatable";
import { useEffect, useState } from "react";
import  Header  from "./header";
import  Filter  from "./filter";
import EditProduct from "./edit-product";
import * as XLSX from "xlsx";
import { productDefault } from "@/data/products";

export default function ProductsPage() {
    const [data,setData] = useState<Payment[]>([]);
    const [openEdit, setOpenEdit] = useState(false);
    const [editData, setEditData] = useState();
    const [searchString,setSearchString] = useState("");

    useEffect(() => {
        async function getData() {
          // Fetch data from your API here.
          setData(productDefault)
        }

         getData()
    }, [])

    const handleAddProduct = (data:{ product: string; amount: string; category: string; status: string }) => {
      const tempData = data;
      setData((prevData) => [...prevData, { ...tempData, id: crypto.randomUUID(), product: tempData.product, amount: Number(tempData.amount) }]);
    }

/**
 * Handles the deletion of a product from the data list.
 * This function should be implemented to remove a product
 * based on the provided criteria or identifier.
 */

    const handleDeleteProduct = (data: { id: string; product: string; amount: string; category: string; status: string }) => {
      setData((prevData) => prevData.filter(item => item.id !== data.id));
    }

    const handleEditProduct = (data: { id: string; product: string; amount: string; category: string; status: string }) => {
      // @ts-expect-error
      setEditData(data);
      setOpenEdit(true);
    }

    const handleSaveEditProduct = (data: { id: string; product: string; amount: string; category: string; status: string }) => {
      setOpenEdit(false);
      setData((prevData) => 
        prevData.map(item => item.id === data.id ? {...data, product: data.product, amount: Number(data.amount)} : item)
      );
    }
    
    const getSearchProduct = (search?: string) => {
        setSearchString(search ? search : '')
    }

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
        handleExportData={() => downloadExcel()}
        handleAddProduct={(data:{ product: string; amount: string; category: string; status: string }) => {
          handleAddProduct(data)
        }} 
        />
      <Filter  handleSearch={(search:string) => {getSearchProduct(search)}} />
      <DataTable 
      filterString={searchString}
      columns={columns} 
      data={data} 
      handleDelete={(data:{ id: string; product: string; amount: string; category: string; status: string }) => {handleDeleteProduct(data)}} 
      handleEdit={(data:{ id: string; product: string; amount: string; category: string; status: string }) => {handleEditProduct(data)}}
      />
      <EditProduct 
        editData={editData || { id: '', product: '', amount: '', category: '', status: '' }}
        setOpenEdit={setOpenEdit}
        openEdit={openEdit}
        handleEditProduct={(data:{ id:string; product: string; amount: string; category: string; status: string }) => {
          handleSaveEditProduct(data)
      }}
      />
    </div>
  );
}

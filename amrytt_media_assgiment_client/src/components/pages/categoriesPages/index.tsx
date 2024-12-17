/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import TopCategoryCard from "./topCategoryCard";
import { Payment } from "@/utils/model/datatable";
import { createCategory, deleteCategory, getCategories, updateCategory } from "@/api/category";
import AddCategory from "./add-category";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { toast } from "react-toastify";
import EditCategory from "./edit-category";


export default function CategoriesPages() {
  const [data,setData] = useState<Payment[]>([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [editData, setEditData] = useState<Payment[]>();
  useEffect(() => {
          async function getData() {
            // Fetch data from your API here.
            try {
              const response = await getCategories();
              console.log(response);
              setData(response)
            } catch (error) {
              console.log("Error",error)
            }
            // active json products
            // setData(productDefault)
          }
  
           getData()
      }, [])
      
      const handleSaveAddCategory = async (data:{category:string}) => {
        try {
          const response = await toast.promise(createCategory(data), {
            pending: 'Creating category...',
            success: 'Category created successfully',
            error: 'Error creating category'
          })

          setData((prev) => [...prev, response]);
        } catch (error){
          console.log(error)
        }
      }

      const handleClickDelete = async (data:{ _id: string; category: string; }) => {
        try {
            await toast.promise(deleteCategory(data), {
            pending: 'Deleting category...',
            success: 'Category deleted successfully',
            error: 'Error deleting category'
          })

          setData((prev) => prev.filter((item) => item._id !== data._id));
        } catch (error){
          console.log(error)
        }
      }
      const handleSaveEditProduct = async (data: {
          _id: string;
          category: string;
        }) => {
          try {
            const response = await toast.promise(updateCategory(data), {
              pending: "Updating Category...",
              success: "Category Updated Successfully!",
              error: "Error Updating Category!",
            });
            setOpenEdit(false);
            setData((prevData) =>
              prevData?.map((item) =>
                item._id === data._id ? { ...item, category: data.category } : item
              )
            );
            console.log("Category updated:", response);
          } catch (error) {
            console.error("Error updating category:", error);
          }
        };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between w-full">
      <div>
          <h1 className="font-public-sans text-[24px] font-semibold leading-[32px] tracking-[0.01em] text-left  decoration-skip-ink-none">
            Category
          </h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Category</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      <AddCategory handleAddCategory={(data:{category:string}) => {
        handleSaveAddCategory(data)
      }} />
      </div>
      <EditCategory
      handleEditCategory={(data:{_id: string;category:string}) => {
        handleSaveEditProduct(data)
      }}
      setOpenEdit={setOpenEdit}
      openEdit={openEdit}
      // @ts-expect-error
      editData={editData}
      />
      <TopCategoryCard data={data} handleEdit={(data:{ _id: string; category: string; }) => {
         // @ts-expect-error
        setEditData(data)
        setOpenEdit(true)
      }} 
      handleDelete={(data:{ _id: string; category: string; }) => {
        handleClickDelete(data)
      }}
      />
    </div>
  );
}

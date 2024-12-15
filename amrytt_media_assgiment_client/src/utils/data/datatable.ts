import { Payment } from "../model/datatable";
import { ColumnDef } from "@tanstack/react-table"

export const payments: Payment[] = [
    {
      id: "728ed52f",
      product:"iphone 12",
      category:"electronics",
      amount: 100,
      status: "pending",
    },
    {
      id: "489e1d42",
      product:"iphone 12",
      category:"electronics",
      amount: 125,
      status: "pending",
    },
  ]

  export const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "product",
      header: "Product",
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "amount",
      header: "Price",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
  ]
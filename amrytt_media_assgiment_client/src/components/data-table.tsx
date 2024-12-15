/* eslint-disable @typescript-eslint/ban-ts-comment */



"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "./ui/button"
import { DeleteIcon, Edit2Icon } from "lucide-react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData , TValue>[]
  data: TData[],
  filterString:string,
  handleEdit: (data: { id: string; product: string; amount: string; category: string; status: string }) => void;
  handleDelete: (data: { id: string; product: string; amount: string; category: string; status: string }) => void;
}


export function DataTable<TData, TValue>({
  columns,
  data,
  handleEdit,
  handleDelete,
  filterString
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md shadow-sm ">
      <Table  >
        <TableHeader  >
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          ))}
          
        </TableHeader>
        <TableBody >
          {table.getRowModel().rows?.length ? (
            table
              .getRowModel()
              .rows.filter((row) => {
                // @ts-expect-error
                const name = row.original?.product?.toLowerCase();
                // @ts-expect-error
                const status = row.original?.status?.toLowerCase();
                // @ts-expect-error
                const category = row.original?.category?.toLowerCase();
                return filterString
                  ? name.includes(filterString.toLowerCase()) ||
                    status.includes(filterString.toLowerCase()) ||
                    category.includes(filterString.toLowerCase())
                  : true;
              })
              .map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="capitalize">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end">
                    <Button variant={"ghost"} className=" w-4" onClick={() => {
                      // @ts-expect-error
                      handleEdit(row.original)}}>
                      <Edit2Icon />
                    </Button>
                    <Button variant={"ghost"} className=" w-4" onClick={() => {
                        // @ts-expect-error
                      handleDelete(row.original)}}>
                      <DeleteIcon />
                    </Button >
                    </div>
                  </TableCell>
                </TableRow>
              ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length + 1} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

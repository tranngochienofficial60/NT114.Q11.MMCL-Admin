"use client";

import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom ui/Delete";
import Link from "next/link";

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "title",
    header: "Tên sản phẩm",
    cell: ({ row }) => (
      <Link
        href={`/products/${row.original._id}`}
        className="hover:decoration-black hover:underline hover:underline-offset-4"
      >
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: "category",
    header: "Phân loại",
  },
  {
    accessorKey: "collections",
    header: "Bộ sưu tập",
    cell: ({ row }) => row.original.collections.map((collection) => collection.title).join(", "),
  },
  {
    accessorKey: "price",
    header: "Giá (VND)",
  },
  {
    accessorKey: "expense",
    header: "Chi phí (VND)",
  },
  {
    id: "actions",
    cell: ({ row }) => <Delete item="product" id={row.original._id} />,
  },
];

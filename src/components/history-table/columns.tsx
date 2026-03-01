"use client"

import { ColumnDef } from "@tanstack/react-table"

// Захиалгын төрөл (Type definition)
export type Order = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  date: string
}

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "date",
    header: "Огноо",
  },
  {
    accessorKey: "id",
    header: "Захиалгын ID",
  },
  {
    accessorKey: "amount",
    header: "Дүн",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("mn-MN", {
        style: "currency",
        currency: "MNT",
      }).format(amount)
      return <div className="font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "status",
    header: "Төлөв",
    cell: ({ row }) => (
      <span className={`capitalize ${row.getValue("status") === 'success' ? 'text-green-600' : 'text-orange-500'}`}>
        {row.getValue("status")}
      </span>
    ),
  },
]
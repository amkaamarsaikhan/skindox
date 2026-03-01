"use client"

import React, { useEffect, useState } from "react"
import { collection, query, where, getDocs } from "firebase/firestore"
import { db, auth } from "@/lib/firebase" // Таны firebase config файл хаана байгаагаас хамаарч замыг нь зөв заагаарай
import { OrderDataTable } from "@/components/history-table/data-table"
import { columns, Order } from "@/components/history-table/columns"
import { onAuthStateChanged } from "firebase/auth"

export default function HistoryPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 1. Хэрэглэгч нэвтэрсэн эсэхийг шалгах
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // 2. Зөвхөн тухайн нэвтэрсэн хэрэглэгчийн захиалгуудыг Firestore-оос татах
          const q = query(
            collection(db, "orders"), 
            where("userId", "==", user.uid)
          )
          
          const querySnapshot = await getDocs(q)
          const fetchedOrders: Order[] = []
          
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            fetchedOrders.push({
              id: doc.id,
              amount: data.amount,
              status: data.status,
              email: data.email,
              date: data.date, // Хэрэв Firestore Timestamp бол data.date.toDate().toLocaleDateString() гэж хөрвүүлнэ
            })
          })
          
          setOrders(fetchedOrders)
        } catch (error) {
          console.error("Өгөгдөл татахад алдаа гарлаа: ", error)
        } finally {
          setLoading(false)
        }
      } else {
        setLoading(false)
        // Хэрэглэгч нэвтрээгүй бол нэвтрэх хуудас руу шилжүүлэх логик энд байж болно
      }
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return <div className="container mx-auto py-10 text-center">Уншиж байна...</div>
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-8">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Захиалгын түүх</h1>
        <p className="text-muted-foreground">
          Таны хийсэн сүүлийн үеийн захиалгуудын жагсаалт.
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border p-4">
        <OrderDataTable columns={columns} data={orders} />
      </div>
    </div>
  )
}
import type { NextApiRequest, NextApiResponse } from "next"
import { getDB } from "@/lib/mongodb"
import bcrypt from "bcrypt"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const { email, password } = req.body

  if (!email || !password || password.length < 6) {
    return res.status(400).json({ message: "Invalid input" })
  }

  try {
    const db = await getDB()
    const usersCollection = db.collection("users")

    // Kiểm tra email đã tồn tại chưa
    const existingUser = await usersCollection.findOne({ email })

    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" })
    }

    // Mã hóa password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Tạo user mới
    const newUser = {
      email,
      password: hashedPassword,
      name: email.split("@")[0],
      createdAt: new Date(),
    }

    const result = await usersCollection.insertOne(newUser)

    if (!result.acknowledged) {
      throw new Error("Failed to create user")
    }

    return res.status(201).json({ message: "User created" })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Internal server error" })
  }
}

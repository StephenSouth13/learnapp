import type { NextApiRequest, NextApiResponse } from "next"
import { getDB } from "@/lib/mongodb"
import bcrypt from "bcrypt"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" })
  }

  try {
    const db = await getDB()
    const usersCollection = db.collection("users")

    const user = await usersCollection.findOne({ email })

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    // Trả về thông tin user (không trả password)
    return res.status(200).json({
      id: user._id,
      email: user.email,
      name: user.name,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Internal server error" })
  }
}

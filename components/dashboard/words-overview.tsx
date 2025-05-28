"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getWords } from "@/lib/vocabulary"

export function WordsOverview() {
  const [wordCount, setWordCount] = useState(0)

  useEffect(() => {
    const words = getWords()
    setWordCount(words.length)
  }, [])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Saved Words</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{wordCount}</div>
        <p className="text-xs text-muted-foreground">Words in your vocabulary notebook</p>
      </CardContent>
    </Card>
  )
}

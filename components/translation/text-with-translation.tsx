"use client"

import { useState, useRef, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TranslationPopup } from "./translation-popup"
import { useToast } from "@/components/ui/use-toast"

const englishText = `
Learning a new language opens up a world of opportunities. It allows you to connect with people from different cultures and backgrounds. The process of language acquisition involves listening, speaking, reading, and writing. Regular practice is essential for mastering any language. Don't be afraid to make mistakes, as they are a natural part of the learning process.
`

const germanText = `
Eine neue Sprache zu lernen eröffnet eine Welt voller Möglichkeiten. Es ermöglicht Ihnen, sich mit Menschen aus verschiedenen Kulturen und Hintergründen zu verbinden. Der Prozess des Spracherwerbs umfasst Hören, Sprechen, Lesen und Schreiben. Regelmäßiges Üben ist unerlässlich, um eine Sprache zu beherrschen. Haben Sie keine Angst, Fehler zu machen, da sie ein natürlicher Teil des Lernprozesses sind.
`

export function TextWithTranslation() {
  const [selectedText, setSelectedText] = useState("")
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 })
  const [showPopup, setShowPopup] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("english")
  const textRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (textRef.current && !textRef.current.contains(event.target as Node)) {
        setShowPopup(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleTextSelection = () => {
    const selection = window.getSelection()
    if (selection && selection.toString().trim().length > 0) {
      const range = selection.getRangeAt(0)
      const rect = range.getBoundingClientRect()

      setSelectedText(selection.toString().trim())
      setPopupPosition({
        x: rect.left + window.scrollX + rect.width / 2,
        y: rect.bottom + window.scrollY,
      })
      setShowPopup(true)
    } else {
      setShowPopup(false)
    }
  }

  const handleSaveWord = () => {
    // Save the selected word to localStorage
    const existingWords = JSON.parse(localStorage.getItem("savedWords") || "[]")
    const newWord = {
      id: Date.now(),
      text: selectedText,
      language: currentLanguage,
      translation: currentLanguage === "english" ? "German translation" : "English translation",
      dateAdded: new Date().toISOString(),
    }

    localStorage.setItem("savedWords", JSON.stringify([...existingWords, newWord]))

    toast({
      title: "Word saved",
      description: `"${selectedText}" has been added to your vocabulary notebook.`,
    })

    setShowPopup(false)
  }

  return (
    <div className="relative">
      <Tabs defaultValue="english" onValueChange={setCurrentLanguage}>
        <TabsList className="mb-4">
          <TabsTrigger value="english">English</TabsTrigger>
          <TabsTrigger value="german">German</TabsTrigger>
        </TabsList>
        <TabsContent value="english">
          <div
            ref={textRef}
            className="text-lg leading-relaxed"
            onMouseUp={handleTextSelection}
            onTouchEnd={handleTextSelection}
          >
            {englishText}
          </div>
        </TabsContent>
        <TabsContent value="german">
          <div
            ref={textRef}
            className="text-lg leading-relaxed"
            onMouseUp={handleTextSelection}
            onTouchEnd={handleTextSelection}
          >
            {germanText}
          </div>
        </TabsContent>
      </Tabs>

      {showPopup && (
        <TranslationPopup
          text={selectedText}
          position={popupPosition}
          onSave={handleSaveWord}
          sourceLanguage={currentLanguage}
          targetLanguage={currentLanguage === "english" ? "german" : "english"}
        />
      )}
    </div>
  )
}

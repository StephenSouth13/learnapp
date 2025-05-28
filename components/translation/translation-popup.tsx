"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookmarkPlus } from "lucide-react"

interface TranslationPopupProps {
  text: string
  position: { x: number; y: number }
  onSave: () => void
  sourceLanguage: string
  targetLanguage: string
}

export function TranslationPopup({ text, position, onSave, sourceLanguage, targetLanguage }: TranslationPopupProps) {
  // In a real app, you would call a translation API here
  const getTranslation = (text: string, from: string, to: string) => {
    // Mock translation for demo purposes
    if (from === "english" && to === "german") {
      const translations: Record<string, string> = {
        learning: "Lernen",
        language: "Sprache",
        new: "neu",
        world: "Welt",
        opportunities: "Möglichkeiten",
        connect: "verbinden",
        people: "Menschen",
        cultures: "Kulturen",
        backgrounds: "Hintergründe",
        process: "Prozess",
        acquisition: "Erwerb",
        listening: "Hören",
        speaking: "Sprechen",
        reading: "Lesen",
        writing: "Schreiben",
        practice: "Übung",
        essential: "wesentlich",
        mastering: "Beherrschen",
        mistakes: "Fehler",
        natural: "natürlich",
        "learning process": "Lernprozess",
      }

      return translations[text.toLowerCase()] || `[${text} auf Deutsch]`
    } else if (from === "german" && to === "english") {
      const translations: Record<string, string> = {
        lernen: "Learning",
        sprache: "Language",
        neu: "New",
        welt: "World",
        möglichkeiten: "Opportunities",
        verbinden: "Connect",
        menschen: "People",
        kulturen: "Cultures",
        hintergründe: "Backgrounds",
        prozess: "Process",
        erwerb: "Acquisition",
        hören: "Listening",
        sprechen: "Speaking",
        lesen: "Reading",
        schreiben: "Writing",
        übung: "Practice",
        wesentlich: "Essential",
        beherrschen: "Mastering",
        fehler: "Mistakes",
        natürlich: "Natural",
        lernprozess: "Learning process",
      }

      return translations[text.toLowerCase()] || `[${text} in English]`
    }

    return `[Translation of "${text}"]`
  }

  const translation = getTranslation(text, sourceLanguage, targetLanguage)

  return (
    <Card
      className="absolute z-50 w-64 shadow-lg"
      style={{
        left: `${position.x}px`,
        top: `${position.y + 10}px`,
        transform: "translateX(-50%)",
      }}
    >
      <CardContent className="p-4">
        <div className="mb-2">
          <div className="font-bold">{text}</div>
          <div className="text-sm text-muted-foreground">{translation}</div>
        </div>
        <Button size="sm" className="w-full" onClick={onSave}>
          <BookmarkPlus className="mr-2 h-4 w-4" />
          Save to Vocabulary
        </Button>
      </CardContent>
    </Card>
  )
}

export interface Word {
  id: number
  text: string
  language: string
  translation: string
  dateAdded: string
}

export function getWords(): Word[] {
  if (typeof window === "undefined") return []

  const savedWords = localStorage.getItem("savedWords")
  return savedWords ? JSON.parse(savedWords) : []
}

export function saveWord(word: Omit<Word, "id" | "dateAdded">) {
  const words = getWords()
  const newWord = {
    ...word,
    id: Date.now(),
    dateAdded: new Date().toISOString(),
  }

  localStorage.setItem("savedWords", JSON.stringify([...words, newWord]))

  // Trigger storage event for other components to update
  window.dispatchEvent(new Event("storage"))

  return newWord
}

export function deleteWord(id: number) {
  const words = getWords()
  const updatedWords = words.filter((word) => word.id !== id)

  localStorage.setItem("savedWords", JSON.stringify(updatedWords))

  // Trigger storage event for other components to update
  window.dispatchEvent(new Event("storage"))
}

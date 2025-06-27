// src/app/qanything/page.tsx
'use client'
import { useState } from 'react'

export default function QAnythingPage() {
  const [query, setQuery] = useState('')
  const [answer, setAnswer] = useState('')

  const handleAsk = async () => {
    const res = await fetch('https://api.qanything.tech/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_QA_KEY}`
      },
      body: JSON.stringify({ question: query })
    })
    const data = await res.json()
    setAnswer(data.answer)
  }

  return (
    <div className="p-8 space-y-4">
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button 
        onClick={handleAsk}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        提问
      </button>
      {answer && (
        <div className="p-4 bg-gray-100 rounded">
          {answer}
        </div>
      )}
    </div>
  )
}
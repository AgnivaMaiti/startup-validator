
import { useState } from 'react'

export default function Home() {
  const [idea, setIdea] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const validateIdea = async () => {
    setLoading(true)
    const res = await fetch('/api/validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idea })
    })
    const data = await res.json()
    setResult(data.result)
    setLoading(false)
  }

  return (
    <main style={{ maxWidth: 600, margin: 'auto', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🚀 Startup Idea Validator</h1>
      <textarea
        rows={6}
        style={{ width: '100%', padding: '1rem', fontSize: 16 }}
        placeholder="Enter your startup idea..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />
      <button onClick={validateIdea} style={{ marginTop: 10, padding: '0.7rem 1.5rem' }}>
        {loading ? 'Validating...' : 'Validate'}
      </button>
      <pre style={{ marginTop: 20, background: '#f9f9f9', padding: '1rem', whiteSpace: 'pre-wrap' }}>
        {result}
      </pre>
    </main>
  )
}

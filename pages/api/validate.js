
import { GoogleGenerativeAI } from '@google/generative-ai'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { idea } = req.body
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

  const prompt = `
You are a startup analyst. Evaluate this startup idea and provide:
1. A brief viability analysis.
2. Target market and potential audience.
3. Monetization strategy suggestions.
Startup Idea: ${idea}
`
  try {
    const result = await model.generateContent(prompt)
    const text = result.response.text()
    res.status(200).json({ result: text })
  } catch (error) {
    res.status(500).json({ error: 'Failed to analyze the idea.' })
  }
}

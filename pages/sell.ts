import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed')

  try {
    const { token, amount } = JSON.parse(req.body)
    console.log(`SELL ${amount} of ${token}`)

    // TODO: Replace with actual sell logic, maybe send to Kleon bot engine
    res.status(200).json({ success: true, message: `Selling ${amount} of ${token}` })
  } catch (err) {
    res.status(500).json({ success: false, error: 'Invalid request' })
  }
}

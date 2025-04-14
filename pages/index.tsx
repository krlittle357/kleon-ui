import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [token, setToken] = useState('')
  const [amount, setAmount] = useState('')
  const [status, setStatus] = useState('')

  const handleTrade = async (type: 'buy' | 'sell') => {
    setStatus('Sending...')
    // Placeholder logic, replace with real API call later
    setTimeout(() => {
      setStatus(`${type.toUpperCase()} ${amount} of ${token} complete ✅`)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 space-y-8">
      <Head>
        <title>Kleon DEX</title>
      </Head>

      <header className="flex justify-between items-center border-b border-gray-700 pb-4">
        <h1 className="text-2xl font-bold">Kleon DEX</h1>
        <nav className="space-x-4">
          <button className="border px-4 py-2 rounded">Dashboard</button>
          <button className="border px-4 py-2 rounded">Trade</button>
          <button className="border px-4 py-2 rounded">Sniper</button>
          <button className="border px-4 py-2 rounded">Wallets</button>
        </nav>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-semibold">Total Wallets</h2>
          <p className="text-2xl">12</p>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-semibold">Total Balance</h2>
          <p className="text-2xl">37.5 SOL</p>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-semibold">Top Coin</h2>
          <p className="text-2xl">$KLEON</p>
        </div>
      </section>

      <section className="bg-gray-900 p-6 rounded-lg space-y-4">
        <h2 className="text-xl font-bold">Trade Panel</h2>
        <input
          className="bg-gray-800 p-2 w-full rounded text-black"
          placeholder="Token (e.g. RUG)"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <input
          className="bg-gray-800 p-2 w-full rounded text-black"
          placeholder="Amount (e.g. 1.5)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="space-x-4">
          <button onClick={() => handleTrade('buy')} className="bg-green-600 px-4 py-2 rounded">Buy</button>
          <button onClick={() => handleTrade('sell')} className="bg-red-600 px-4 py-2 rounded">Sell</button>
          <button className="bg-yellow-500 px-4 py-2 rounded">⚡ Degen Mode</button>
        </div>
        <div className="text-sm text-gray-400 mt-2">{status}</div>
      </section>
    </div>
  )
}

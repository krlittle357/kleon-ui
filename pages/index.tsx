import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Keypair } from '@solana/web3.js'

export default function Home() {
  const [token, setToken] = useState('')
  const [amount, setAmount] = useState('')
  const [status, setStatus] = useState('')
  const [wallet, setWallet] = useState<Keypair | null>(null)

  useEffect(() => {
    // Auto-generate a wallet on load
    const newWallet = Keypair.generate()
    setWallet(newWallet)
  }, [])

  const handleTrade = async (type: 'buy' | 'sell') => {
    if (!wallet) return setStatus('No wallet loaded')
    setStatus('Sending...')

    try {
      const res = await fetch(`/api/${type}`, {
        method: 'POST',
        body: JSON.stringify({ token, amount }),
      })
      const data = await res.json()
      setStatus(data.message || 'Trade complete')
    } catch (err) {
      setStatus('Trade failed')
    }
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

      {wallet && (
        <section className="bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-semibold">Wallet Address</h2>
          <p className="text-sm break-all">{wallet.publicKey.toBase58()}</p>
        </section>
      )}

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

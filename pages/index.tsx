import Head from 'next/head'

export default function Home() {
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
    </div>
  )
}

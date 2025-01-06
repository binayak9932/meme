'use client';
import { useState, useEffect } from 'react';

interface MemeCoin {
  name: string;
  symbol: string;
  logo: string;
  marketCap: number;
  createdAt: Date;
  popularityScore: number; // Mock metric for popularity
}

export default function MemeCoins() {
  // Mock data
  const [memeCoins, setMemeCoins] = useState<MemeCoin[]>([
    {
      name: 'Doge Coin',
      symbol: 'DOGE',
      logo: '/doge.png',
      marketCap: 500000000,
      createdAt: new Date('2023-01-01'),
      popularityScore: 95,
    },
    {
      name: 'Shiba Inu',
      symbol: 'SHIB',
      logo: '/shiba.png',
      marketCap: 300000000,
      createdAt: new Date('2023-05-15'),
      popularityScore: 90,
    },
    {
      name: 'Pepe Coin',
      symbol: 'PEPE',
      logo: '/pepe.png',
      marketCap: 200000000,
      createdAt: new Date(),
      popularityScore: 80,
    },
    {
      name: 'Cat Coin',
      symbol: 'CAT',
      logo: '/cat.png',
      marketCap: 100000000,
      createdAt: new Date(),
      popularityScore: 70,
    },
  ]);

  // Sorting data for each category
  const mostPopular = memeCoins.sort((a, b) => b.popularityScore - a.popularityScore);
  const trendingToday = memeCoins.sort((a, b) => b.popularityScore - a.popularityScore); // Mock sorting for trending
  const createdJustNow = memeCoins.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  const largestMarketCap = memeCoins.sort((a, b) => b.marketCap - a.marketCap);

  // Reusable row component
  const MemeCoinRow = ({ title, coins }: { title: string; coins: MemeCoin[] }) => (
    <div className="mb-8">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="flex overflow-x-auto gap-4">
        {coins.map((coin, index) => (
          <div
            key={index}
            className="flex-none w-40 h-48 bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-between"
          >
            <img
              src={coin.logo}
              alt={coin.name}
              className="h-20 w-20 object-contain rounded-full"
            />
            <div className="text-center">
              <h3 className="text-lg font-medium">{coin.name}</h3>
              <p className="text-gray-500">{coin.symbol}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">All Meme Coins</h1>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Browse Meme Coins</h2>
        <MemeCoinRow title="Most Popular" coins={mostPopular} />
        <MemeCoinRow title="Trending Today" coins={trendingToday} />
        <MemeCoinRow title="Created Just Now" coins={createdJustNow} />
        <MemeCoinRow title="Largest Market Cap" coins={largestMarketCap} />
      </div>
    </main>
  );
}

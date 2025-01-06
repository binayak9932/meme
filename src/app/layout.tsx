import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meme Coin Maker',
  description: 'Create your own meme coin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Meme Coin Maker</h1>
            <button className="bg-blue-500 px-4 py-2 rounded">Connect Wallet</button>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

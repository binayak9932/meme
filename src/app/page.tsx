
'use client'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Check } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [tokenData, setTokenData] = useState({
    name: '',
    symbol: '',
    totalSupply: '',
    description: '',
    logo: null,
    decimals: '18',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Meme Token Creator</h1>
            <div className="flex space-x-4">
              {/* Add Dashboard Link */}
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Button>Connect Wallet</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>Create Your Meme Token</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Token Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., Doge Coin"
                  value={tokenData.name}
                  onChange={(e) => setTokenData({ ...tokenData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="symbol">Token Symbol</Label>
                <Input
                  id="symbol"
                  placeholder="e.g., DOGE"
                  value={tokenData.symbol}
                  onChange={(e) => setTokenData({ ...tokenData, symbol: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="totalSupply">Total Supply</Label>
                  <Input
                    id="totalSupply"
                    type="number"
                    placeholder="1000000000"
                    value={tokenData.totalSupply}
                    onChange={(e) => setTokenData({ ...tokenData, totalSupply: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="decimals">Decimals</Label>
                  <Input
                    id="decimals"
                    type="number"
                    placeholder="18"
                    value={tokenData.decimals}
                    onChange={(e) => setTokenData({ ...tokenData, decimals: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your token..."
                  value={tokenData.description}
                  onChange={(e) => setTokenData({ ...tokenData, description: e.target.value })}
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="logo">Token Logo</Label>
                <Input
                  id="logo"
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setTokenData({ ...tokenData, logo: e.target.files?.[0] || null })
                  }
                />
              </div>

              <Button type="submit" className="w-full">
                Create Token
              </Button>
            </form>

            {status === 'success' && (
              <Alert className="mt-4">
                <Check className="h-4 w-4" />
                <AlertDescription>
                  Token creation initiated! Check your wallet to confirm.
                </AlertDescription>
              </Alert>
            )}

            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <h3 className="font-medium mb-2">Note:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Logo size should be 200x200px (max 5MB)</li>
                <li>• Token symbol should be 2-5 characters</li>
                <li>• Initial supply can be modified later</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

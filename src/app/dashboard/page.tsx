'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

interface Token {
name: string;
symbol: string;
totalSupply: string;
decimals: string;
}

export default function Dashboard() {
  // Mock data for created tokens
const [tokens, setTokens] = useState<Token[]>([
    {
    name: 'Doge Coin',
    symbol: 'DOGE',
    totalSupply: '1000000000',
    decimals: '18',
    },
    {
    name: 'Shiba Inu',
    symbol: 'SHIB',
    totalSupply: '500000000',
    decimals: '18',
    },
]);

  // Mock user profile
  const userProfile = {
    name: 'John Doe',
    walletAddress: '0x123...456',
    bio: 'Blockchain enthusiast and meme token creator.',
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <Button>Logout</Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-6 px-4 space-y-8">
        {/* Profile Section */}
        <Card>
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label>Name</Label>
                <p>{userProfile.name}</p>
              </div>
              
              <div>
                <Label>Wallet Address</Label>
                <p>{userProfile.walletAddress}</p>
              </div>
              <div>
                <Label>Bio</Label>
                <p>{userProfile.bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tokens Section */}
        <Card>
          <CardHeader>
            <CardTitle>Your Created Tokens</CardTitle>
          </CardHeader>
          <CardContent>
            {tokens.length > 0 ? (
              <div className="space-y-4">
                {tokens.map((token, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border rounded-lg p-4"
                  >
                    <div>
                      <h3 className="font-semibold text-lg">{token.name}</h3>
                      <p className="text-sm text-gray-600">
                        Symbol: {token.symbol} | Supply: {token.totalSupply} | Decimals: {token.decimals}
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No tokens created yet.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

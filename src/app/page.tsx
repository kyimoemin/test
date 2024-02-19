'use client'
import { EmbedStatus } from '@coinweb/cweb-wallet-library';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello world {EmbedStatus.Confirmed}
    </main>
  )
}

'use client'
import { useEffect } from 'react';
export default function Home() {
  
  useEffect(() => {
    test()
  }, []);

  async function test() {
    // const {EmbedStatus} = await import("@coinweb/cweb-wallet-library");
    // console.log(EmbedStatus.Confirmed);
    // const { add } = await import("../hello");
    // console.log(add(1,3))
    const { greet } = await import("../pkg");
    greet()
 }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello world
    </main>
  );
}

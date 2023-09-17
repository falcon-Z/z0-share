import { Button } from "./_components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-6xl font-bold'>Welcome to Next.js!</h1>
      <Button>Click Me</Button>
    </main>
  )
}

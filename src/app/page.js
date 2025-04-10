'use client';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <Button variant="default" onClick={() => router.push('/dashboard')}>Tıkla</Button>
    </div>
  );
}

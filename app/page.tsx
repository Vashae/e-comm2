import Image from "next/image"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <>
     <div className="relative w-full z-0 h-screen overflow-hidden">
    <Image 
    src='/sunset.jfif'
    fill
    alt='Sunset'
    style={{ objectFit: 'cover', opacity: 0.9}}
          priority
    />
    <div className='flex flex-col justify-center inset-0 z-100 items-center absolute h-full text-3xl space-y-4'>
    <div className="text-white bg-black text-3xl">Welcome to the Ultimate E-commerce experience!</div>
     <Button asChild><Link href='/'>Continue</Link></Button>
    </div>
    </div>
    </>
  );
}

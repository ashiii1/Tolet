"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header() {

const path=usePathname();

useEffect(()=>{

},[])

  return (
    <div className='p-6 px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 bgwhite'>
        <div className='flex gap-12 items-center'>
        <Image src={'/logo.svg'} width={80} height={80} alt='logo'/>
        <ul className=' hidden md:flex gap-10'>
    <Link href={'/'} >   <li className={`'hover:text-primary font-medium text-sm cursor-pointer' ${path=='/'&&'text-primary' }`}>Home</li></Link>
            <li className='hover:text-primary font-medium text-sm cursor-pointer'>For Sale</li>
            <li className='hover:text-primary font-medium text-sm cursor-pointer'>For Rent</li>
            <li className='hover:text-primary font-medium text-sm cursor-pointer'>PG/Hostel</li>
            </ul>
        </div>  
        <div className='flex gap-2'>
        <Button className='flex gap-2'><Plus className='h-5 w-5'/> Post your Ad</Button>
        <Button variant='outline'>Login</Button>
        </div>
    </div>
  )
}

export default Header
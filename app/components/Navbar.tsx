"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
    const pathName = usePathname();
  return (
    <div className={"flex gap-4"}>
        <Link className={pathName=="/"? "active" : ""} href={"/"}>Home</Link>
        <Link className={pathName=="/contact"? "active" : ""} href={"/contact"}>Contact</Link>
        <Link className={pathName=="/components/about"? "active" : ""} href={"/components/about"}>About</Link>
        <Link className={pathName=="/components/login"? "active" : ""} href={"/components/login"}>Login</Link>
    </div>
  )
}

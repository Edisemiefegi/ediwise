"use client"

import { useStore } from '@/store/Store'
import React, {  ReactNode, useEffect } from 'react'


interface Props {
    children: ReactNode
}
export default function ThemeProvider({children}: Props) {

const {theme} = useStore()
useEffect(() => {
  document.documentElement.classList.toggle("dark", theme === "dark");
}, [theme])


  return (
    <div>{children}</div>
  )
}

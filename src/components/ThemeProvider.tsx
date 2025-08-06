"use client"

import { useTheme } from '@/store/Theme'
import React, {  ReactNode, useEffect } from 'react'


interface Props {
    children: ReactNode
}
export default function ThemeProvider({children}: Props) {

const {theme} = useTheme()
useEffect(() => {
  document.documentElement.classList.toggle("dark", theme === "dark");
}, [theme])


  return (
    <div>{children}</div>
  )
}

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from "@/lib/registry";
import React from "react";
import localFont from "next/font/local";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const suit = localFont({
  src: '../assets/fonts/SUIT-Variable.ttf',
});

export const metadata: Metadata = {
  title: 'App:ple Pi',
  description: 'App:ple Pi Web',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={suit.className}>
    <StyledComponentsRegistry>
      <NavBar/>
      {children}
      <Footer/>
    </StyledComponentsRegistry>
    </body>
    </html>
  )
}

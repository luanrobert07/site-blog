import type React from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { Inter, PT_Sans_Caption } from "next/font/google"
import { CallToAction } from "@/template/landing-page/sections/call-to-action"

type LayoutProps = {
  children: React.ReactNode
}

const inter = Inter({ 
  subsets: ['latin'],
  weight: [
    '400', '500'
  ],
  variable: '--font-sans'

})
const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-sans'
})

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${inter.className} ${ptSansCaption.className} relative flex min-h-screen flex-col bg-gray-700 font-inter`}
    >
      <Header/>
      <main className="flex-1 flex flex-col mb-12 mt-10">
        {children}
      </main>
      <CallToAction />
      <Footer/>
    </div>
  )
}
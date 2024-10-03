import './globals.css'
import type { Metadata } from 'next'
import Providers from './redux/providers'
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Pharma Unions',
  description: 'Revolutionary medical startup',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className="overflow-x-hidden">
      <Providers>
      {children}
      </Providers>
    <Toaster />
      </body>
  </html>
  )
}

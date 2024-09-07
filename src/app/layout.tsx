import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'umin.ai - Unified machines, items and arificial intelligence.',
  description: 'umin.ai - Unified machines, items and arificial intelligence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}

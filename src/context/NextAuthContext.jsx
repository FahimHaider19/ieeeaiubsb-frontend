'use client'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'

export default function NextAuthSessionProvider({ children }) {
  return (
    <SessionProvider>
      <div>
        <Toaster />
      </div>
      <main>
        {children}
      </main>
    </SessionProvider>
  )
}
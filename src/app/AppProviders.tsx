'use client'

import { ReactNode } from 'react'
import { MerittProvider } from '@merittdev/sdk'
import { Toaster } from 'sonner'

/**
 * Firebase configuration for the Meritt SDK
 * In a real app, these would come from environment variables
 */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

/**
 * App providers component that wraps the entire application
 * with necessary providers in the correct order
 *
 * @param children - Child components to wrap
 * @returns JSX element with all providers
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <MerittProvider config={firebaseConfig}>
      {/* <ThemeProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange={false}
        enableSystem={false}
      > */}
        {children}
        <Toaster richColors position="top-right" />
      {/* </ThemeProvider> */}
    </MerittProvider>
  )
}

"use client"

import type { PropsWithChildren } from "react"
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs"

export default function AuthProvider({ children }: PropsWithChildren) {
  return <KindeProvider>{children}</KindeProvider>
}

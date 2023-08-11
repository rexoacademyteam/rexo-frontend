"use client";

import useAuth from "@/hooks/useAuth";
import { useEffect } from "react"

export default function AuthProvider({ children }) {
    const auth = useAuth()

    useEffect(() => {
        auth.Load()
    }, [])

    return (
        <>
            {children}
        </>
    )
}

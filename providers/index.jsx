"use client";

import AuthProvider from "./auth";
import StoreProvider from "./store"
import AppThemeProvider from "./theme";


export default function Providers({ children }) {
    return (
        <StoreProvider>
            <AppThemeProvider>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </AppThemeProvider>
        </StoreProvider>
    )
}

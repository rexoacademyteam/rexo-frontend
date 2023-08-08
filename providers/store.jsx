"use client";

import { store } from "@/store"
import { Provider as ReduxProvider } from "react-redux"

export default function StoreProvider({ children }) {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    )
}

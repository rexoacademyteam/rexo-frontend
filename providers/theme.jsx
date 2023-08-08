"use client";

import { ThemeProvider } from "@material-tailwind/react";

const theme = {
    component: {
        defaultProps: {
            className: "font-fa"
        }
    }
}

export default function AppThemeProvider({ children }) {

    return (
        <ThemeProvider value={theme}>
            {children}
        </ThemeProvider>
    )
}

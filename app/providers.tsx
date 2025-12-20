"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import ukdriveTheme from "./theme/ukdriveTheme";
import { Toaster } from "sonner";
import { AuthProvider } from "../context/authContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={ukdriveTheme}>
      <AuthProvider>
        <CssBaseline />
        {children}
        <Toaster
          position="top-center"
          richColors
          toastOptions={{
            style: {
              borderRadius: "12px",
              padding: "14px 16px",
            },
          }}
        />
      </AuthProvider>
    </ThemeProvider>
  );
}

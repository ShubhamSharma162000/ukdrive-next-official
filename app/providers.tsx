"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import ukdriveTheme from "./theme/ukdriveTheme";
import { Toaster } from "sonner";
import { AuthProvider } from "../context/authContext";
import StoreClientLayout from "./store-client-layout";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={ukdriveTheme}>
      <CssBaseline />
      <AuthProvider>
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

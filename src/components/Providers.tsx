"use client";

import { type ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n";
import { RequestModalProvider } from "./RequestModal";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <RequestModalProvider>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </RequestModalProvider>
    </LanguageProvider>
  );
}

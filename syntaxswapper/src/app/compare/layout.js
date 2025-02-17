"use client"
import { FontAwesomeScript , Navigation } from "../components/Nav";

export default function RootLayout({ children }) {
  return (
    <div>
        <FontAwesomeScript />
        <Navigation />
        {children}
    </div>
  );
}

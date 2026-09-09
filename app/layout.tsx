import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gigz - Find Local Talent. Instantly.",
  description: "Connect with local clients and service providers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main style={{ paddingTop: "80px", minHeight: "calc(100vh - 100px)" }}>
          {children}
        </main>
        <footer
          style={{
            padding: "40px 0",
            borderTop: "1px solid var(--border-glass)",
            marginTop: "60px",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <div style={{ display: "flex", gap: "24px" }}>
              <Link
                href="/privacy"
                style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}
              >
                Terms of Service
              </Link>
              <Link
                href="/delete-account"
                style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}
              >
                Delete Account
              </Link>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              &copy; {new Date().getFullYear()} Gigz. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

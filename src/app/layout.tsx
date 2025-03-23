import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/common/layout/navbar";
import { Footer } from "@/components/common/layout/footer";
import { Providers } from "@/components/providers";

// Define the Inter font
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Twistly CBD | Premium CBD Products",
  description: "Premium CBD products for your wellness journey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-sans antialiased min-h-screen bg-background">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

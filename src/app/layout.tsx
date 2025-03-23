import "./globals.css";
import { Inter } from "next/font/google";

// Define the Inter font
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "CBD Wellness",
  description: "Premium CBD products for your wellness journey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-sans antialiased min-h-screen bg-background">
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

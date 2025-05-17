import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sommaire - AI-powered PDF Summarization",
  description:
    "Save hours of reading time. Transform lengthy PDFs into clear, accurate summaries in seconds with our advanced AI technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${fontSans.variable} antialiased`}>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

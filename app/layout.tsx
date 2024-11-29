import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SnapFix - Instantly Fix Your Photos",
  description: "Never miss a perfect moment again. Fix blinking eyes, remove red-eye, and enhance your photos with just one tap.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <main className="flex-grow">
          <div className="container mx-auto px-4 md:px-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}


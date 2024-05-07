import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });
export const runtime = "edge";

export const metadata = {
  title: "Dr. Rajat Subhra Goswami",
  description: "Dr. Rajat Subhra Goswami || CV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + " dark:bg-gradient-to-r dark:from-slate-900 dark:to-zinc-800"}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

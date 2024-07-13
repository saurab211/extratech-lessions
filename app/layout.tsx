import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <header className="flex w-full py-6 bg-blue-900">
          <nav className="w-full px-8">
            <div className="flex justify-between items-center w-full">
              <div className="text-white ">Intro to Web Development</div>
              <div>
                <ul className="text-white">
                  <li>Home</li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <section className="h-full"> {children}</section>
      </body>
    </html>
  );
}

import "./globals.css";
import Header from "./components/Header";
import { DM_Mono } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
;

const dmMono = DM_Mono({
  subsets: ["latin"], // You can add more subsets if needed
  weight: ["400", "500"], // Add specific weights you need (e.g., 400 = Regular, 500 = Medium)
  variable: "--font-dm-mono", // Set a CSS variable for the font
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en" className="dark">
      <body className={`${dmMono.className} dark:bg-background bg-gray-200 pb-[1000px]`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}

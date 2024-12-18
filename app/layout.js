import "./globals.css";
import Header from "./components/Header";
import { DM_Mono } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop";
import { Footer } from "./components/Footer";

const dmMono = DM_Mono({
  subsets: ["latin"], // You can add more subsets if needed
  weight: ["400", "500"], // Add specific weights you need (e.g., 400 = Regular, 500 = Medium)
  variable: "--font-dm-mono", // Set a CSS variable for the font
});

export const metadata = {
  title: "Imtiaz Hasan - Frontend Developer Portfolio",
  description: "Explore my work, skills, and projects as a passionate frontend developer.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Imtiaz Hasan - Frontend Developer Portfolio",
    description: "Explore my work, skills, and projects.",
    url: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmMono.className} dark:bg-background bg-gray-200`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <ToastContainer />
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

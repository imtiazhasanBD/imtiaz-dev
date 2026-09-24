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
  metadataBase: new URL("https://www.imtiazhasan.dev"),
  title: {
    default: "Imtiaz Hasan - Full Stack Developer | WebRTC & DevOps",
    template: "%s | Imtiaz Hasan",
  },
  description:
    "Explore the portfolio, projects, and technical writing of Imtiaz Hasan, a Full Stack Developer specializing in Next.js, Nest.js, WebRTC real-time streaming, n8n automations, and Linux VPS DevOps.",
  keywords: [
    "Imtiaz Hasan",
    "Full Stack Developer",
    "Next.js Developer",
    "Nest.js Developer",
    "WebRTC Developer",
    "Real-time Audio Video",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "DevOps",
    "Docker",
    "Linux VPS",
    "Bangladesh Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Imtiaz Hasan", url: "https://www.imtiazhasan.dev" }],
  creator: "Imtiaz Hasan",
  publisher: "Imtiaz Hasan",
  alternates: {
    canonical: "https://www.imtiazhasan.dev",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Imtiaz Hasan - Full Stack Developer | WebRTC & DevOps",
    description:
      "Explore full-stack projects, real-time media architectures, and technical writing by Imtiaz Hasan.",
    url: "https://www.imtiazhasan.dev",
    siteName: "Imtiaz Hasan - Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Imtiaz Hasan - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imtiaz Hasan - Full Stack Developer | WebRTC & DevOps",
    description:
      "Explore full-stack projects, real-time media architectures, and technical writing by Imtiaz Hasan.",
    images: ["/images/hero.webp"],
    creator: "@imtiazhasanbd",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.imtiazhasan.dev/#person",
      name: "Imtiaz Hasan",
      jobTitle: "Full Stack Developer",
      url: "https://www.imtiazhasan.dev",
      image: "https://www.imtiazhasan.dev/images/hero.webp",
      sameAs: [
        "https://github.com/imtiazhasanBD",
        "https://linkedin.com/in/imtiazhasanbd",
      ],
      description:
        "Full Stack Developer specializing in Next.js, Nest.js, WebRTC real-time systems, n8n automations, and Linux VPS DevOps.",
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Nest.js",
        "Node.js",
        "WebRTC",
        "Docker",
        "Nginx",
        "Linux VPS DevOps",
      ],
      email: "mailto:imtiazbd.dev@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "Bangladesh",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.imtiazhasan.dev/#website",
      url: "https://www.imtiazhasan.dev",
      name: "Imtiaz Hasan Portfolio",
      description: "Official portfolio and technical blog of Imtiaz Hasan",
      publisher: {
        "@id": "https://www.imtiazhasan.dev/#person",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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

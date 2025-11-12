import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import ScrollProgress from "./components/helper/scroll-progress";
import AnimatedBackground from "./components/helper/animated-background";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Akash Kumar- Software Developer",
  description:
    "This is the portfolio of Akash Kumar. I am a Software Engineer passionate about building scalable systems and optimizing performance. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
  icons: {
    icon: '/png/akky.jpg',
    shortcut: '/png/akky.jpg',
    apple: '/png/akky.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedBackground />
        <ScrollProgress />
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}

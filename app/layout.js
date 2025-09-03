import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Dhiraj Jaiswal App and Web Developer",
  description: "Learn more about Dhiraj Jaiswal, a web and application developer specializing in Java and Java(XML) Next.js, React, and modern web apps.",
  keywords: ["Portfolio", "Next.js Developer", "React", "Web Developer","Application Developer", "Dhiraj Jaiswal"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-amber-50 bg-gradient-to-l from-[#500101] via-[#161423] to-[#23202d]
">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

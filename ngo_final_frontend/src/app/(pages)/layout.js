import Header from "@/component/header";
import "../globals.css";
import Footer from "@/component/footer";
import { Inter } from "next/font/google";
import Loading from "../loading";
import NotFound from "../not-found";  // Adjust import name to follow PascalCase convention
import NoFundraiser from "@/component/nofundraiser";  // Adjust import name to follow PascalCase convention

export const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const isLoading = !children && !NotFound && !NoFundraiser;

  return (
    <>
      <html lang="en">
        <head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-3F9DGFXBH4"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3F9DGFXBH4');
            `}
          </script>
          <link rel="icon" href="/images/favicon.ico" />
        </head>
        <body className={inter.className}>
          <Header />
          <div style={{ minHeight: "70vh" }}>
            {isLoading ? <Loading /> : children}
          </div>
          <Footer />
        </body>
      </html>
    </>
  );
}

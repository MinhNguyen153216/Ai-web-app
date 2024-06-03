"use client";
require("../assets/style/global.scss");
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["vietnamese"],
  weight: ["400", "700"],
});

// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        <Footer />
      </body>
    </html>
  );
}

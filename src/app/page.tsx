import Header from "../components/header/header";
import Footer from "../components/footer/footer";

import Link from "next/link";


export default function Home() {
  return (
    <>
      <Header />

      <Link href="google.com">Gioi thieu</Link>

      <h1>Home body</h1>
      <Footer />
    </>
  );
}

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

import Link from "next/link";
export default function Home() {
  return (
    <>
      <Header />

      {/* thêm */}
      <Link href="/diachi">Địa chỉ chính thức</Link>
      <br/>
      <Link href="/diachi/diachi1">Địa chỉ chi nhánh 1</Link>
      <br/>
      <Link href="/diachi/diachi2">Địa chỉ chi nhánh 2</Link>
      <br/>
      <Link href="/gioithieu">Gioi thieu</Link>
      {/* sửa */}
      <h2>Home body</h2>

      <Footer />
    </>
  );
}

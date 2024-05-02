"use client";
import styleHeader from "../../assets/style/header.module.scss";
import Image from "next/image";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className={styleHeader.header}>
        <div className={styleHeader.headerContainer}>
          {/* icon */}
          <div className={styleHeader.icon}>
            <Link href="/">
              <Image
                src="/img/Menu-icon.png"
                width={85}
                height={85}
                alt="Logo"
              />
            </Link>
            <div className={styleHeader.companyName}>
              <h1>Cao Lanh Phước Nhân</h1>
              <h3>Uy Tín - Chất Lượng</h3>
            </div>
          </div>

          {/* menu */}
          <div className={styleHeader.menu}>
            {/* Trang chu */}
            <Link href="/">
              <div className={styleHeader.menuPart}>
                <HomeRoundedIcon sx={{ fontSize: 22 }}/>
                <p>Trang Chủ</p>
              </div>
            </Link>

            {/* San Pham */}
            <Link href="/sanpham">
              <div className={styleHeader.menuPart}>
                <ShoppingCartIcon sx={{ fontSize: 22 }} />
                <p>Sản Phẩm</p>
              </div>
            </Link>

            {/* Gioi Thieu */}
            <Link href="/gioithieu">
              <div className={styleHeader.menuPart}>
                <InfoIcon sx={{ fontSize: 22 }} />
                <p>Giới Thiệu</p>
              </div>
            </Link>

            {/* Lien He */}
            <Link href="/lienhe">
              <div className={styleHeader.menuPart}>
                <CallIcon sx={{ fontSize: 22 }} />
                <p>Liên Hệ</p>
              </div>
            </Link>
          </div>
        </div>

      </header>
    </>
  );
}

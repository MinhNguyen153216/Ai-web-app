"use client";
import styleHeader from "../../assets/style/header.module.scss";
import Image from "next/image";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [choosePage, setChooseState] = useState(1);
  const [showMenuSmall, setMenuSmall] = useState(false);

  function handleClickPage(num: number) {
    setChooseState((choosePage) => num);
  }

  return (
    <>
      <header className={styleHeader.header}>
        <div className={styleHeader.headerContainer}>
          {/*---small menu---*/}
          {/* small menu icon*/}
          <div
            className={styleHeader.smallMenu}
            onClick={() => setMenuSmall((prevDisplay) => !prevDisplay)}
          >
            <MenuIcon sx={{ fontSize: 40 }} />
          </div>
          {/* small list menu*/}
          <div
            className={styleHeader.listMenuSmall}
            style={{ display: showMenuSmall ? "block" : "none" }}
          >
            {/* Trang chu */}
            <Link href="/">
              <div
                className={
                  styleHeader.menuPart +
                  " " +
                  styleHeader.animationMenu1 +
                  " " +
                  `${choosePage === 1 ? styleHeader.clickedPage : ""}`
                }
                onClick={() => {
                  handleClickPage(1);
                  setMenuSmall((prevDisplay) => !prevDisplay);
                }}
              >
                <HomeRoundedIcon sx={{ fontSize: 22 }} />
                <p>Trang Chủ</p>
              </div>
            </Link>

            {/* San Pham */}
            <Link href="/sanpham">
              <div
                className={
                  styleHeader.menuPart +
                  " " +
                  styleHeader.animationMenu2 +
                  " " +
                  `${choosePage === 2 ? styleHeader.clickedPage : ""}`
                }
                onClick={() => {
                  handleClickPage(2);
                  setMenuSmall((prevDisplay) => !prevDisplay);
                }}
              >
                <ShoppingCartIcon sx={{ fontSize: 22 }} />
                <p>Sản Phẩm</p>
              </div>
            </Link>

            {/* Gioi Thieu */}
            <Link href="/gioithieu">
              <div
                className={
                  styleHeader.menuPart +
                  " " +
                  styleHeader.animationMenu3 +
                  " " +
                  `${choosePage === 3 ? styleHeader.clickedPage : ""}`
                }
                onClick={() => {
                  handleClickPage(3);
                  setMenuSmall((prevDisplay) => !prevDisplay);
                }}
              >
                <InfoIcon sx={{ fontSize: 22 }} />
                <p>Giới Thiệu</p>
              </div>
            </Link>

            {/* Lien He */}
            <Link href="/lienhe">
              <div
                className={
                  styleHeader.menuPart +
                  " " +
                  styleHeader.animationMenu4 +
                  " " +
                  `${choosePage === 4 ? styleHeader.clickedPage : ""}`
                }
                onClick={() => {
                  handleClickPage(4);
                  setMenuSmall((prevDisplay) => !prevDisplay);
                }}
              >
                <CallIcon sx={{ fontSize: 22 }} />
                <p>Liên Hệ</p>
              </div>
            </Link>
          </div>

          {/*---company icon---*/}
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

          {/*---big menu---*/}
          <div className={styleHeader.menu}>
            {/* Trang chu */}
            <Link href="/">
              <div
                className={
                  styleHeader.menuPart +
                  " " +
                  `${choosePage === 1 ? styleHeader.clickedPage : ""}`
                }
                onClick={() => handleClickPage(1)}
              >
                <HomeRoundedIcon sx={{ fontSize: 22 }} />
                <p>Trang Chủ</p>
              </div>
            </Link>

            {/* San Pham */}
            <Link href="/sanpham">
              <div
                className={
                  styleHeader.menuPart +
                  " " +
                  `${choosePage === 2 ? styleHeader.clickedPage : ""}`
                }
                onClick={() => handleClickPage(2)}
              >
                <ShoppingCartIcon sx={{ fontSize: 22 }} />
                <p>Sản Phẩm</p>
              </div>
            </Link>

            {/* Gioi Thieu */}
            <Link href="/gioithieu">
              <div
                className={
                  styleHeader.menuPart +
                  " " +
                  `${choosePage === 3 ? styleHeader.clickedPage : ""}`
                }
                onClick={() => handleClickPage(3)}
              >
                <InfoIcon sx={{ fontSize: 22 }} />
                <p>Giới Thiệu</p>
              </div>
            </Link>

            {/* Lien He */}
            <Link href="/lienhe">
              <div
                className={
                  styleHeader.menuPart +
                  " " +
                  `${choosePage === 4 ? styleHeader.clickedPage : ""}`
                }
                onClick={() => handleClickPage(4)}
              >
                <CallIcon sx={{ fontSize: 22 }} />
                <p>Liên Hệ</p>
              </div>
            </Link>
          </div>
        </div>
        <hr className={styleHeader.end}></hr>
      </header>
    </>
  );
}

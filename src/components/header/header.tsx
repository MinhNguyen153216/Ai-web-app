"use client";
import styleHeader from "../../assets/style/header.module.scss";
import Image from "next/image";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import { red } from '@mui/material/colors'

export default function Header() {
  return (
    <>
      <section className={styleHeader.header}>
        <div className={styleHeader.headerContainer}>
          {/* icon */}
          <div className={styleHeader.icon}>
            <Image
              src="/img/Menu-icon.png"
              width={85}
              height={85}
              alt="Logo"
            />
            <div className={styleHeader.companyName}>
              <h1>Cao Lanh Phước Nhân</h1>
              <h3>Uy Tín - Chất Lượng</h3>
            </div>
          </div>

          {/* menu */}
          <div className={styleHeader.menu}>
            <div className={styleHeader.menuPart}>
              <HomeRoundedIcon sx={{fontSize:22}}/>
              <p>Trang Chủ</p>
            </div>
            <div className={styleHeader.menuPart}>
              <ShoppingCartIcon sx={{fontSize:22}}/>
              <p>Sản Phẩm</p>
            </div>
            <div className={styleHeader.menuPart}>
              <InfoIcon sx={{fontSize:22}}/>
              <p>Giới Thiệu</p>
            </div>
            <div className={styleHeader.menuPart}>
              <CallIcon sx={{fontSize:22}}/>
              <p>Liên Hệ</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { useState } from "react";
import styleDetailProduct from "../../../assets/style/detailProduct.module.scss";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";
import { ST } from "next/dist/shared/lib/utils";
// import 'animate.css';

export default function SanPham() {
  return (
    <>
      <div className={styleDetailProduct.detailProduct}>
        <div
          className={`globalContainer ${styleDetailProduct.detailProductContainer}`}
        >
          {/* Tiêu đề sản phẩm */}
          <div className={styleDetailProduct.detailProductTitle}>
            <h1>
              <Link href="/sanpham">SẢN PHẨM</Link>
            </h1>
          </div>
          {/* Ảnh, Tên, Giá sản phẩm */}
          <div className={styleDetailProduct.productMain}>
            {/* Fastlink */}
            <div className={styleDetailProduct.fastLink}>
              <nav>
                <ul>
                  <li>
                    <Link href="/">Trang Chủ </Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link href="/sanpham">Sản Phẩm</Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Tên sản phẩm */}
            <div className={styleDetailProduct.productName}>
              <p>Bột Cao Lanh Thô 02</p>
            </div>

            <div className={styleDetailProduct.productItem}>

              {/* Trái (ảnh) */}
              <div className={styleDetailProduct.MainLeft}>
                
                {/* Ảnh sản phẩm */}
                <div className={styleDetailProduct.productImg}>
                  <Image
                    src="/img/botthocaolanh02.png"
                    width={240}
                    height={300}
                    alt="picture"
                    quality={100}
                  />
                </div>
              </div>

              {/* Phải (nội dung) */}
              <div className={styleDetailProduct.MainRight}>
                {/* Chi tiết, nội dung sản phẩm */}
                <div className={styleDetailProduct.productContent}>
                  {/* Tiêu đề nội dụng sản phẩm */}
                  <div className={styleDetailProduct.productContentTitle}>
                    <h2>Mô Tả</h2>
                  </div>

                  {/* Nội dung chính sản phẩm */}
                  <div className={styleDetailProduct.productContentDetail}>
                    <p>
                      Ứng dụng ngành sản xuất Hóa Chất, Phân Bón, Thuốc Trừ Sâu,
                      Thuốc Bảo Vệ Thực Vật, Xử Lý Môi Trường, Thức Ăn Chăn Nuôi
                    </p>
                   
                    <br />
                    <h3 style={{ fontWeight: "bold" }}>Loại cao lanh:</h3>
                    <p>Bột cao lanh lọc siêu mịn 1 (SML01)</p>
                    <p>Bột cao lanh lọc siêu mịn 2 (SML02)</p>
                    <p>Cao lanh lọc khô</p>
                    <p>Cao lanh lọc ướt</p>
                    <br />
                    <p>
                      Kết quả thử nghiệm:{" "}
                      <a href="/img/dattrang.pdf" target="_blank">
                        Xem tại đây
                      </a>
                    </p>
                    {/* Giá sản phẩm */}
                    <div className={`${styleDetailProduct.productPrice} ${styleDetailProduct.animated} ${styleDetailProduct.shake}`}>
                      <p>
                        <a className={styleDetailProduct.animate__headShake} href="tel:0908310833">LIÊN HỆ </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

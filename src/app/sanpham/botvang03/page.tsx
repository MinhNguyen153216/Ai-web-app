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
              <p>Bột Vàng 04</p>
            </div>

            <div className={styleDetailProduct.productItem}>
              {/* Trái (ảnh) */}
              <div className={styleDetailProduct.MainLeft}>
                {/* Ảnh sản phẩm */}
                <div className={styleDetailProduct.productImg}>
                  <Image
                    src="/img/botcaolanhsmvang.png"
                    width={100000}
                    height={100000}
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
                    <h3>Ứng Dụng</h3>
                    <p>
                      •  Phân bón, thức ăn chăn nuôi
                    </p>
                    <h3>Tiêu Chuẩn</h3>
                    <p>
                      Al<sub>2</sub>o<sub>3</sub> : 16.8%{" "}
                    </p>
                    <p>
                      Fe<sub>2</sub>o<sub>3</sub> : 3.8%{" "}
                    </p>
                    <br />
                    <p>
                      Kết quả thử nghiệm:{" "}
                      <a href="/img/datvang.pdf" target="_blank">
                        Xem tại đây
                      </a>
                    </p>
                    {/* Giá sản phẩm */}
                    <div
                      className={`${styleDetailProduct.productPrice} ${styleDetailProduct.animated} ${styleDetailProduct.shake}`}
                    >
                      <p>
                        <a
                          className={styleDetailProduct.animate__headShake}
                          href="tel:0908310833"
                        >
                          LIÊN HỆ{" "}
                        </a>
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

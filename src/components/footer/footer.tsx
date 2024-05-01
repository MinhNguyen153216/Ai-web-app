import styleFooter from "../../assets/style/footer.module.scss";
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className={`container ${styleFooter.footerDetail}`}>
        {/* Footer Chính */}
        <section className={styleFooter.mainFooter}>
          {/* Thông tin địa chỉ */}
          <div className={styleFooter.footerAddress}>
            <div className={styleFooter.footerTitle}>
              <h4>THÔNG TIN LIÊN HỆ</h4>
            </div>
            <div className={styleFooter.addressDetail}>
              <p>
                <span style={{ fontWeight: "bold" }}>Địa chỉ:</span> ấp Suối
                Sâu, xã Đất Cuốc, Huyện Bắc Tân Uyên, Bình Dương
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Hotline:</span> 0908310833
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Email: </span>
                phuocnhankaolin@gmail.com
              </p>
            </div>
          </div>
          {/* Liên kết nhanh */}
          <div className={styleFooter.footerLink}>
            <div className={styleFooter.footerTitle}>
              <h4>LIÊN KẾT NHANH</h4>
            </div>
            <div className={styleFooter.fastlinkDetail}>
              <nav>
                <ul>
                  <li>
                    <Link href="/">Trang Chủ</Link>
                  </li>
                  <li>
                    <Link href="/gioithieu">Giới Thiệu</Link>
                  </li>
                  <li>
                    <Link href="/sanpham">Sản Phẩm</Link>
                  </li>
                  <li>
                    <Link href="/lienhe">Liên Hệ</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Map */}
          <div className={styleFooter.footerMap}>
            link thêm 1 cái bản đồ ở đây nè
          </div>
        </section>

        {/* Footer phụ */}
        <section className={styleFooter.footerDesign}>
          <p className={styleFooter.leftDesign}><CopyrightRoundedIcon className={styleFooter.leftIcon}/> 2023 Công ty Phước Nhân . All rights reserved </p>
          <p className={styleFooter.rightDesign}> Web Design & Support by <span>Mattie The Koala</span></p>
        </section>
      </div>
    </>
  );
}

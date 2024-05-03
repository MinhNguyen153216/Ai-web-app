import styleFooter from "../../assets/style/footer.module.scss";
import CopyrightRoundedIcon from "@mui/icons-material/CopyrightRounded";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className={styleFooter.footer}>
        <hr className={styleFooter.end}></hr>
        <div className={`globalContainer ${styleFooter.footerContainer}`}>
          {/* Footer Chính */}
          <section className={styleFooter.Footer}>
            {/* Thông tin địa chỉ */}
            <div className={styleFooter.footerAddress}>
              <div className={styleFooter.footerTitle}>
                <h4>THÔNG TIN LIÊN HỆ</h4>
              </div>

              {/* Thông tin liên hệ chi tiết */}
              <div className={styleFooter.addressDetail}>
                {/* Địa Chỉ */}
                <p>
                  <span style={{ fontWeight: "bold" }}>Địa chỉ:</span> ấp Suối
                  Sâu, xã Đất Cuốc, Huyện Bắc Tân Uyên, Bình Dương
                </p>

                {/* SDT */}
                <p>
                  <span style={{ fontWeight: "bold" }}>Hotline:</span>{" "}
                  <a href="tel:0908310833">0908310833 </a>
                </p>

                {/* Email */}
                <p>
                  <span style={{ fontWeight: "bold" }}>Email: </span>
                  <a
                    itemID={styleFooter.mail}
                    href="mailto:phuocnhankaolin@gmail.com"
                  >
                    phuocnhankaolin@gmail.com
                  </a>
                </p>
              </div>

              {/* <div>CHỊU TRÁCH NHIỆM QUẢN LÝ NỘI DUNG: Ông Trần Phương Huy</div> */}
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
            <div className={`${styleFooter.footerMap} ${styleFooter.grow}`}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31308.167232002117!2d106.5746432!3d11.22304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174ca9ef230deed%3A0x2586c48655cd1ba!2zQ2jhu6MgTG9uZyBOZ3V5w6pu!5e0!3m2!1sen!2s!4v1714674864358!5m2!1sen!2s"></iframe>
            </div>
          </section>

          {/* Footer phụ */}
          <section className={styleFooter.footerDesign}>
            <p className={styleFooter.leftDesign}>
              <CopyrightRoundedIcon className={styleFooter.leftIcon} /> 2023
              Công ty Phước Nhân . All rights reserved{" "}
            </p>
            <p className={styleFooter.rightDesign}>
              {" "}
              Web Design & Support by{" "}
              <span>
                <Link href="https://github.com/MinhNguyen153216">
                  Mattie The Koala
                </Link>
              </span>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

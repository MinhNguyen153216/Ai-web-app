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
            <div
              className={`${styleFooter.footerItem} ${styleFooter.footerAddress}`}
            >
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
            <div
              className={`${styleFooter.footerItem} ${styleFooter.footerLink}`}
            >
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
            <div
              className={`${styleFooter.footerItem} ${styleFooter.grow} ${styleFooter.footerMap}`}
            >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.2739435973253!2d106.83993681134626!3d11.092949253228525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174c3d86d7dc2ad%3A0x736d06e31b0619!2zRE5UTiBLUyBQaMaw4bubYyBOaMOibg!5e0!3m2!1svi!2s!4v1716756124323!5m2!1svi!2s"></iframe>
            </div>
          </section>

          {/* Footer phụ */}
          <section className={styleFooter.footerDesign}>
            <p className={styleFooter.leftDesign}>
              <CopyrightRoundedIcon className={styleFooter.leftIcon} /> 2023
              Công ty Phước Nhân . <span>All rights reserved</span>
            </p>
            <p className={styleFooter.rightDesign}>
              Web Design & Support by &nbsp;
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

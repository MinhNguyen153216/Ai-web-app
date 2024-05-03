"use client";
import styleLienHe from "../../assets/style/lienhe.module.scss";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

import React, { useEffect } from "react";

export default function LienHe() {
  return (
    <>
      <div className={styleLienHe.contact}>
        {/* Tiêu đề */}
        <div className={styleLienHe.contactTitle}>
          <h1>LIÊN HỆ</h1>
        </div>

        {/* container */}
        <div className={`globalContainer ${styleLienHe.container}`}>
          {/* Thông tin liên hệ */}
          <div className={styleLienHe.contactDetail}>
            <div className={styleLienHe.contactInf}>
              <h5>DOANH NGHIỆP TƯ NHÂN</h5>
              <h1>KHOÁNG SẢN PHƯỚC NHÂN </h1>

              {/* address */}
              <div className={styleLienHe.address}>
                <p>
                  <LocationOnRoundedIcon className={styleLienHe.addressIcon} />
                  ấp Suối Sâu, xã Đất Cuốc, Huyện Bắc Tân Uyên, Bình Dương
                </p>
              </div>

              {/* phone */}
              <div className={styleLienHe.phone}>
                <LocalPhoneRoundedIcon className={styleLienHe.phoneIcon} />
                <a href="tel:0908310833">0908310833 </a>
              </div>

              {/* email */}
              <div className={styleLienHe.email}>
                <EmailRoundedIcon className={styleLienHe.emailIcon} />
                <a href="mailto:phuocnhankaolin@gmail.com">
                  phuocnhankaolin@gmail.com
                </a>
              </div>

              {/* schedule */}
              <div className={styleLienHe.schedule}>
                <p>
                  <CalendarMonthRoundedIcon
                    className={styleLienHe.scheduleIcon}
                  />
                  Thời gian làm việc: 6:00 - 18:00 | Thứ Hai - Thứ Bảy
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styleLienHe.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31308.167232002117!2d106.5746432!3d11.22304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174ca9ef230deed%3A0x2586c48655cd1ba!2zQ2jhu6MgTG9uZyBOZ3V5w6pu!5e0!3m2!1sen!2s!4v1714674864358!5m2!1sen!2s"></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

import styleGioiThieu from "../../assets/style/gioithieu.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function GioiThieu() {
  return (
    <>
      <div className={styleGioiThieu.introduce}>
        {/* Tiêu đề */}
        <div className={styleGioiThieu.introduceTitle}>
          <h1>GIỚI THIỆU</h1>
        </div>

        {/* Container */}
        <div className={`globalContainer ${styleGioiThieu.introduceContainer}`}>
          <div className={styleGioiThieu.content}>
            <p>
              &ensp;&ensp;&ensp;Trước tiên, tôi xin thay mặt Ban TGĐ cùng toàn
              thể CBNV của Công ty Cổ phần Khoáng sản Phước nhân (KSPN) xin bày
              tỏ lòng tri ân, cảm kích sâu sắc đến toàn thể{" "}
              <span>quý vị, quý Khách hàng, Đối tác</span> đã luôn đồng hành
              cùng KSPN trên suốt chặng đường phát triển qua. <br></br>
            </p>
            <p>
              <span>Doanh nghiệp tư nhân Khoáng Sản Phước Nhân</span> hoạt động
              trong lĩnh vực sản xuất bột cao lanh. Trong những năm qua chúng
              tôi luôn cải tiến nâng cao chất lượng sản phẩm nhằm đáp ứng nhu
              cầu của thị trường.<br></br> Với vị trí địa lý thuận lợi, địa điểm
              sản xuất thuộc tỉnh Bình Dương trọng điểm khu công nghiệp của Đông
              nam bộ, tạo điều kiện cho việc vận chuyển kaolin đến các nhà máy,
              khu công nghiệp trong khu vực một cách dể dàng và tiết kiệm chi
              phí. <br></br>Với phương châm<span> “uy tín – chất lượng”</span>.
              Chúng tôi đã và đang nổ lực để đưa ra sản phẩm kaolin chất lượng
              phù hợp nhu cầu của khách hàng.
            </p>
            <p>
              Thay mặt Ban Tổng Giám đốc, cùng tập thể CBNV, tôi xin kính chúc
              quý vị , quý Khách hàng, Đối tác và các bên hữu quan sức khỏe,
              hạnh phúc và thành công!
              
            </p>
            
            <p className={styleGioiThieu.sincere}>Trân trọng cám ơn.</p>
          </div>
          {/* <div className={styleGioiThieu.companyInformation}>
            <div className={styleGioiThieu.companyLogo}>
            <Link href="/">
              <Image
                src="/img/Menu-icon.png"
                width={185}
                height={185}
                alt="Logo"
              />
            </Link>
            </div>
            <div className={styleGioiThieu.companyInfo}>
              <div className={styleGioiThieu.infoTitle}>
                <h2>THÔNG TIN TỔNG QUAN</h2>
              </div>
              <div className={styleGioiThieu.infoContent}>
                <span>Tên doanh nghiệp:</span> DOANH NGHIỆP TƯ NHÂN KHOÁNG SẢN PHƯỚC NHÂN
                <br></br> <span>Địa chỉ:</span> ấp Suối Sâu, xã Đất Cuốc, Huyện Bắc Tân Uyên,
                Bình Dương
                <br></br><span>Sđt:</span> 0908310833
                <br></br> <span>Email:</span> phuocnhankaolin@gmail.com
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

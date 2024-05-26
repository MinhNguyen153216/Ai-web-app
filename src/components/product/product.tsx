"use client";
import styleProduct from "../../assets/style/product.module.scss";

import Image from "next/image";
import Link from "next/link";

// Cao lanh lọc
const items1 = [
  {
    detailURL: "/sanpham/botsieumin",
    imgURL: "/img/botcaolanhsieumintrang.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH SIÊU MỊN",
    itemPrice: "LIÊN HỆ",
  },
];

// Cao lanh siêu mịn
const items2 = [
  {
    detailURL: "/sanpham/bottho1",
    imgURL: "/img/botthocaolanh01.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH THÔ 1",
    itemPrice: "LIÊN HỆ",
  },
  {
    detailURL: "/sanpham/bottho2",
    imgURL: "/img/botthocaolanh02.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH THÔ 2",
    itemPrice: "LIÊN HỆ",
  },
];

// Cao lanh thô
const items3 = [
  {
    detailURL: "/sanpham/botvangsm",
    imgURL: "/img/botcaolanhsmvang.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH SM VÀNG",
    itemPrice: "LIÊN HỆ",
  },
  {
    detailURL: "/sanpham/botvang04",
    imgURL: "/img/vang04.png",
    imgALT: "alt of the img",
    itemName: "VÀNG 04",
    itemPrice: "LIÊN HỆ",
  },
];

// Cao lanh vàng
const items4 = [
  {
    detailURL: "/sanpham/datloc",
    imgURL: "/img/botcaolanhloc.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH LỌC",
    itemPrice: "LIÊN HỆ",
  },
];

// Cát
const items5 = [
  {
    detailURL: "/sanpham/cat01",
    imgURL: "/img/catmin.png",
    imgALT: "alt of the img",
    itemName: "CÁT MỊN",
    itemPrice: "LIÊN HỆ",
  },
  {
    detailURL: "/sanpham/cat02",
    imgURL: "/img/catto.png",
    imgALT: "alt of the img",
    itemName: "CÁT TO",
    itemPrice: "LIÊN HỆ",
  },
];

function ProductItem(props: any): any {
  return (
    <div className={styleProduct.productItem}>
      <Link href={props.item.detailURL}>
        <div className={styleProduct.productImg}>
          <Image
            src={props.item.imgURL}
            width={10000}
            height={10000}
            alt={props.item.imgALT}
          />
        </div>
        <div className={styleProduct.detailBorder}>
          <div className={styleProduct.productName}>
            <h3>{props.item.itemName}</h3>
          </div>
          <div className={styleProduct.productPrice}>
            <p>GIÁ: {props.item.itemPrice}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Product() {
  // Input parameter: itemType, itemMenu
  // itemType: danh sách các sản phẩm (vd: items1, items2, ...)
  // itemMenu: loại sản phẩm (vd: cao lanh vàng, cao lanh siêu mịn,...)
  // Output: Item section
  function ItemType(props: any): any {
    return (
      <>
        {/* Menu Section */}
        <div>
          <h2>Mô Tả</h2>
        </div>

        {/* Items */}
        <div className={styleProduct.productListItem}>
          {props.itemType.map((item: any, i: any) => (
            <ProductItem key={i} item={item} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styleProduct.Product}>
        <div className={styleProduct.productTitle}>
          <h1>
            <Link href="/sanpham">SẢN PHẨM</Link>
          </h1>
        </div>
        <div className={`globalContainer ${styleProduct.productDetail}`}>
          {/* item */}
          {/* Cao lanh lọc */}
          <ItemType itemType={items1} itemMenu="Cao lanh lọc" />

          {/* Cao lanh siêu mịn */}
          <ItemType itemType={items2} itemMenu="Cao lanh siêu mịn" />

          {/* Cao lanh thô */}
          <ItemType itemType={items3} itemMenu="Cao lanh thô" />

          {/* Cao lanh vàng */}
          <ItemType itemType={items4} itemMenu="Cao lanh vàng" />

          {/* Cát */}
          <ItemType itemType={items5} itemMenu="Cát" />
        </div>
      </div>
    </>
  );
}

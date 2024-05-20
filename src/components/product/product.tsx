"use client";
import { useState } from "react";
import styleProduct from "../../assets/style/product.module.scss";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";

const itemsTotal = [
  {
    detailURL: "/sanpham/bottho1",
    imgURL: "/img/botthocaolanh01.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH THÔ 1",
    itemPrice: "LIÊN HỆ",
  },
  {
    detailURL: "/sanpham/bottho1",
    imgURL: "/img/botthocaolanh02.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH THÔ 2",
    itemPrice: "LIÊN HỆ",
  },
  {
    detailURL: "/sanpham/datloc",
    imgURL: "/img/botcaolanhloc.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH LỌC",
    itemPrice: "LIÊN HỆ",
  },
  {
    detailURL: "/sanpham/botsieumin",
    imgURL: "/img/botcaolanhsieumintrang.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH SIÊU MỊN",
    itemPrice: "LIÊN HỆ",
  },
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

// bot sieu min
const items1 = [
  {
    detailURL: "/sanpham/botsieumin",
    imgURL: "/img/botcaolanhsieumintrang.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH SIÊU MỊN",
    itemPrice: "LIÊN HỆ",
  },
];

// bot tho
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

// bot vang
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

// dat loc
const items4 = [
  {
    detailURL: "/sanpham/datloc",
    imgURL: "/img/botcaolanhloc.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH LỌC",
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
  const [chooseType, setChooseType] = useState(0);
  const [chooseMenu, setChooseMenu] = useState(0);

  function handleClickProductType(num: number) {
    setChooseType((chooseType) => num);
  }

  function handleClickMenuProduct(num: number) {
    setChooseMenu((chooseMenu) => num);
  }

  function ItemType(): any {
    switch (chooseType) {
      // 1
      case 1:
        return (
          <>
            {items1.map((item, i) => (
              <ProductItem key={i} item={item} />
            ))}
          </>
        );
      // 2
      case 2:
        return (
          <>
            {items2.map((item, i) => (
              <ProductItem key={i} item={item} />
            ))}
          </>
        );
      // 3
      case 3:
        return (
          <>
            {items3.map((item, i) => (
              <ProductItem key={i} item={item} />
            ))}
          </>
        );
      // 4
      case 4:
        return (
          <>
            {items4.map((item, i) => (
              <ProductItem key={i} item={item} />
            ))}
          </>
        );
      // default
      default:
        return (
          <>
            {itemsTotal.map((item, i) => (
              <ProductItem key={i} item={item} />
            ))}
          </>
        );
    }

    // works
    // return itemsA.map((item, i) => <ProductItem key={i} item={item} />);
  }

  return (
    <>
      <div className={styleProduct.Product}>
        <div className={styleProduct.productTitle}>
          <h1>
            <Link
              href="/sanpham"
              onClick={() => {
                handleClickProductType(0);
                handleClickMenuProduct(0);
              }}
            >
              SẢN PHẨM
            </Link>
          </h1>
        </div>
        <div className={`globalContainer ${styleProduct.productDetail}`}>
          {/* menu */}
          <div className={styleProduct.productMenu}>
            {/* total */}
            <div className={styleProduct.menuTotal}>
              <div
                className={styleProduct.menuDetail}
                onClick={() => {
                  handleClickProductType(0);
                  handleClickMenuProduct(0);
                }}
              >
                <h2>Tất cả</h2>
              </div>
            </div>

            {/* specific */}
            <div className={styleProduct.menuSpecific}>
              <div
                className={
                  styleProduct.menuDetail +
                  " " +
                  `${chooseMenu === 1 ? styleProduct.clickedMenu : ""}`
                }
                onClick={() => {
                  handleClickProductType(1);
                  handleClickMenuProduct(1);
                }}
              >
                <p>Bột siêu mịn</p>
              </div>
              <div
                className={
                  styleProduct.menuDetail +
                  " " +
                  `${chooseMenu === 2 ? styleProduct.clickedMenu : ""}`
                }
                onClick={() => {
                  handleClickProductType(2);
                  handleClickMenuProduct(2);
                }}
              >
                <p>Bột thô</p>
              </div>
              <div
                className={
                  styleProduct.menuDetail +
                  " " +
                  `${chooseMenu === 3 ? styleProduct.clickedMenu : ""}`
                }
                onClick={() => {
                  handleClickProductType(3);
                  handleClickMenuProduct(3);
                }}
              >
                <p>Bột vàng</p>
              </div>
              <div
                className={
                  styleProduct.menuDetail +
                  " " +
                  `${chooseMenu === 4 ? styleProduct.clickedMenu : ""}`
                }
                onClick={() => {
                  handleClickProductType(4);
                  handleClickMenuProduct(4);
                }}
              >
                <p>Đất lọc</p>
              </div>
            </div>
          </div>

          {/* list items */}
          <div className={styleProduct.productListItem}>
            {/* item */}
            <ItemType />
          </div>
        </div>
      </div>
    </>
  );
}

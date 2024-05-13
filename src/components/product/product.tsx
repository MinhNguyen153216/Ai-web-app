"use client";
import { useState } from "react";
import styleProduct from "../../assets/style/product.module.scss";
import Image from "next/image";

const itemsTotal = [
  {
    imgURL: "/img/botthocaolanh01.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH THÔ 1",
    itemPrice: "LIÊN HỆ",
  },
  {
    imgURL: "/img/botthocaolanh02.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH THÔ 2",
    itemPrice: "LIÊN HỆ",
  },
  {
    imgURL: "/img/botcaolanhloc.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH LỌC",
    itemPrice: "LIÊN HỆ",
  },
  {
    imgURL: "/img/botcaolanhsieumintrang.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH SIÊU MỊN",
    itemPrice: "LIÊN HỆ",
  },
  {
    imgURL: "/img/botcaolanhsmvang.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH SM VÀNG",
    itemPrice: "LIÊN HỆ",
  },
  {
    imgURL: "/img/vang04.png",
    imgALT: "alt of the img",
    itemName: "VÀNG 04",
    itemPrice: "LIÊN HỆ",
  },
];

// bot sieu min
const items1 = [
  {
    imgURL: "/img/botcaolanhsieumintrang.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH SIÊU MỊN",
    itemPrice: "LIÊN HỆ",
  },
];

// bot tho
const items2 = [
  {
    imgURL: "/img/botthocaolanh01.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH THÔ 1",
    itemPrice: "LIÊN HỆ",
  },
  {
    imgURL: "/img/botthocaolanh02.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH THÔ 2",
    itemPrice: "LIÊN HỆ",
  },
];

// bot vang
const items3 = [
  {
    imgURL: "/img/botcaolanhsmvang.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH SM VÀNG",
    itemPrice: "LIÊN HỆ",
  },
  {
    imgURL: "/img/vang04.png",
    imgALT: "alt of the img",
    itemName: "VÀNG 04",
    itemPrice: "LIÊN HỆ",
  },
];

// dat loc
const items4 = [
  {
    imgURL: "/img/botcaolanhloc.png",
    imgALT: "alt of the img",
    itemName: "BỘT CAO LANH LỌC",
    itemPrice: "LIÊN HỆ",
  },
];

function ProductItem(props: any): any {
  return (
    <div className={styleProduct.productItem}>
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
    </div>
  );
}

export default function Product() {
  const [chooseType, setChooseType] = useState(0);

  function handleClickProductType(num: number) {
    setChooseType((chooseType) => num);
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
        <div className={`globalContainer ${styleProduct.productDetail}`}>
          {/* menu */}
          <div className={styleProduct.productMenu}>
            <div
              className={styleProduct.menuDetail}
              onClick={() => handleClickProductType(0)}
            >
              <p>Tất cả sản phẩm</p>
            </div>
            <div
              className={styleProduct.menuDetail}
              onClick={() => handleClickProductType(1)}
            >
              <p>Bột siêu mịn</p>
            </div>
            <div
              className={styleProduct.menuDetail}
              onClick={() => handleClickProductType(2)}
            >
              <p>Bột thô</p>
            </div>
            <div
              className={styleProduct.menuDetail}
              onClick={() => handleClickProductType(3)}
            >
              <p>Bột vàng</p>
            </div>
            <div
              className={styleProduct.menuDetail}
              onClick={() => handleClickProductType(4)}
            >
              <p>Đất lọc</p>
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

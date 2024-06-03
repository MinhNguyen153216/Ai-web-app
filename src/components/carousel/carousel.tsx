"use client";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Image from "next/image";
import { text } from "stream/consumers";
import styleCarousel from "../../assets/style/carousel.module.scss";

function Item(props: any): any {
  return (
    <Paper className={styleCarousel.Paper}>
<<<<<<< HEAD
      <Image
        className={styleCarousel.imgCarousel}
        src={props.item.test}
        priority
        width={9999}
        height={9999}
        alt="Logo"
=======
      <img
        className={styleCarousel.imgCarousel}
        src={props.item.test}
        // priority
        width={9999}
        height={9999}
        alt="Logo"
        // unoptimized
>>>>>>> a1774de11f23c09cf67fe692eec7282f6ba6c2ce
      />
    </Paper>
  );
}
export default function ComponentCarousel() {
  var items = [
    {
      test: "/img/chitiet.png",
<<<<<<< HEAD
=======
      
>>>>>>> a1774de11f23c09cf67fe692eec7282f6ba6c2ce
    },
    {
      test: "/img/maymoc.png",
    },
    {
      test: "/img/tongquan.png",
    },
  ];
  return (
    <>
      <div>
        <Carousel>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </>
  );
}

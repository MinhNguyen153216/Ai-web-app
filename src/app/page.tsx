"use client";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styleGlobal from "../style/global.module.scss";

import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

import { Typography } from "@mui/material";

import Link from "next/link";
//
function Item(props: any): any {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default function Home(props: any): any {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <>
      <div className={styleGlobal.global}>
        <Header />

        <Typography variant="h1">test Material UI</Typography>

        {/* thêm */}
        <Link href="/diachi">Địa chỉ chính thức</Link>
        <br />
        <Link href="/diachi/diachi1">Địa chỉ chi nhánh 1</Link>
        <br />
        <Link href="/diachi/diachi2">Địa chỉ chi nhánh 2</Link>
        <br />
        <Link href="/gioithieu">Gioi thieu</Link>
        {/* sửa */}
        <h2>Home body</h2>

        <Carousel>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>

        <Footer />
      </div>
    </>
  );
}

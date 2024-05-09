"use client"
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from '@mui/material'
import Image from "next/image";
import { text } from "stream/consumers";
import styleCarousel from "../../assets/style/carousel.module.scss"

function Item(props: any): any {
   return (
    <Paper className={styleCarousel.Paper}>
        <Image className={styleCarousel.imgCarousel}
                src={props.item.test}
                width={5000}
                height={5050}        
                alt="Logo"
              />

    </Paper>
  );
}
export default function ComponentCarousel() {
     var items = [
    {
        
        test:"/img/chitiet.png"
      
    },
    {
        test:"/img/maymoc.png"
    },
    {
        test:"/img/tongquan.png"

    }
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
    )
}

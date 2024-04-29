// "use client";
require("../assets/style/global.scss");
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Carousel from "react-material-ui-carousel";

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
  // var items = [
  //   {
  //     name: "Random Name #1",
  //     description: "Probably the most random thing you have ever seen!",
  //   },
  //   {
  //     name: "Random Name #2",
  //     description: "Hello World!",
  //   },
  // ];
  return (
    <>
      <div>
        <h2>Home body</h2>
        <h2></h2>

        {/* <Carousel>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel> */}
      </div>
    </>
  );
}

import Carousel from "react-material-ui-carousel";
import styleHomePage from "../../assets/style/homepage.module.scss"
import ComponentCarousel from "@/components/carousel/carousel"
import Product from "@/components/product/product"

export default function HomePage() {
  return (
    <>
        <div>
            <div className={styleHomePage.Home}>
                <div className={`globalContainer`}>
                    <div className={styleHomePage.Carousel}>
                        <ComponentCarousel></ComponentCarousel>
                    </div>
                    <div className={styleHomePage.Product}>
                        <Product></Product>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

import styleProduct from "../../assets/style/product.module.scss"
import Image from 'next/image'

export default function Product() {
    return (
        <>
        <div className={styleProduct.Product}>
            <div className={`globalContainer ${styleProduct.productDetail}`}>

                <div className={styleProduct.productMenu}>
                    
                        <div className={styleProduct.menuDetail}><a href="">Tất cả sản phẩm</a></div>
                        <div className={styleProduct.menuDetail}><a href="">Bột siêu mịn</a></div>
                        <div className={styleProduct.menuDetail}><a href="">Bột thô</a></div>
                        <div className={styleProduct.menuDetail}><a href="">Bột vàng</a></div>
                        <div className={styleProduct.menuDetail}><a href="">Đất lọc</a></div>
                    
                </div>
                
                <div className={styleProduct.productListItem}>

                    <div className={styleProduct.productItem}>

                        <div className={styleProduct.productImg}>
                            <Image
                            src="/img/anhmayvang.png"
                            width={100000}
                            height={100000}
                            alt="anhmayvang"
                            />
                        </div>
                        <div className={styleProduct.detailBorder}>
                            <div className={styleProduct.productName}>
                                <h3>SẢN PHẨM 1</h3>
                            </div>
                            <div className={styleProduct.productPrice}>
                                <p>GIÁ: LIÊN HỆ</p>
                            </div>
                        </div>

                    </div>
                    <div className={styleProduct.productItem}>

                        <div className={styleProduct.productImg}>
                            <Image
                            src="/img/anhmayvang.png"
                            width={100000}
                            height={100000}
                            alt="anhmayvang"
                            />
                        </div>
                        <div className={styleProduct.detailBorder}>
                            <div className={styleProduct.productName}>
                                <h3>SẢN PHẨM 1</h3>
                            </div>
                            <div className={styleProduct.productPrice}>
                                <p>GIÁ: LIÊN HỆ</p>
                            </div>
                        </div>

                    </div>
                    <div className={styleProduct.productItem}>

                        <div className={styleProduct.productImg}>
                            <Image
                            src="/img/anhmayvang.png"
                            width={100000}
                            height={100000}
                            alt="anhmayvang"
                            />
                        </div>
                        <div className={styleProduct.detailBorder}>
                            <div className={styleProduct.productName}>
                                <h3>SẢN PHẨM 1</h3>
                            </div>
                            <div className={styleProduct.productPrice}>
                                <p>GIÁ: LIÊN HỆ</p>
                            </div>
                        </div>

                    </div>
                    <div className={styleProduct.productItem}>

                        <div className={styleProduct.productImg}>
                            <Image
                            src="/img/anhmayvang.png"
                            width={100000}
                            height={100000}
                            alt="anhmayvang"
                            />
                        </div>
                        <div className={styleProduct.detailBorder}>
                            <div className={styleProduct.productName}>
                                <h3>SẢN PHẨM 1</h3>
                            </div>
                            <div className={styleProduct.productPrice}>
                                <p>GIÁ: LIÊN HỆ</p>
                            </div>
                        </div>

                    </div>
                    <div className={styleProduct.productItem}>

                        <div className={styleProduct.productImg}>
                            <Image
                            src="/img/anhmayvang.png"
                            width={100000}
                            height={100000}
                            alt="anhmayvang"
                            />
                        </div>
                        <div className={styleProduct.detailBorder}>
                            <div className={styleProduct.productName}>
                                <h3>SẢN PHẨM 1</h3>
                            </div>
                            <div className={styleProduct.productPrice}>
                                <p>GIÁ: LIÊN HỆ</p>
                            </div>
                        </div>

                    </div>
                    <div className={styleProduct.productItem}>

                        <div className={styleProduct.productImg}>
                            <Image
                            src="/img/anhmayvang.png"
                            width={100000}
                            height={100000}
                            alt="anhmayvang"
                            />
                        </div>
                        <div className={styleProduct.detailBorder}>
                            <div className={styleProduct.productName}>
                                <h3>SẢN PHẨM 1</h3>
                            </div>
                            <div className={styleProduct.productPrice}>
                                <p>GIÁ: LIÊN HỆ</p>
                            </div>
                        </div>

                    </div>
                    <div className={styleProduct.productItem}>

                        <div className={styleProduct.productImg}>
                            <Image
                            src="/img/anhmayvang.png"
                            width={100000}
                            height={100000}
                            alt="anhmayvang"
                            />
                        </div>
                        <div className={styleProduct.detailBorder}>
                            <div className={styleProduct.productName}>
                                <h3>SẢN PHẨM 1</h3>
                            </div>
                            <div className={styleProduct.productPrice}>
                                <p>GIÁ: LIÊN HỆ</p>
                            </div>
                        </div>

                    </div>
                   
  

                    
                </div>
            </div>
        </div>
        </>
    )
}
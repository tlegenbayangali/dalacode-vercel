import Link from "next/link";
import LayoutNews from "../../../components/layouts/layout-news";

export default function SiteTypes() {
    return (
        <LayoutNews title={'Типы сайтов'}>
            <div className="col-lg-12">
                <div className="info-item">
                    <div className="img">
                        <img src="/assets/img/posts/Astronaut-bro.svg" alt="Разработка Landing Page" />
                    </div>
                    <div className="text-content">
                        <h5 className="mb-20">Разработка Landing Page</h5>
                        <p className="mb-20">
                            Landing Page - одностраничный сайт, необходимый для продажи одного или нескольких
                            товаров. Построение Landing Page не требует предварительных работ, таких как
                            разработка повторяющихся элементов...
                        </p>
                        <Link href="/info/site-types/lp">
                            <a className="read-more">
                                Подробнее
                                <svg width="12" height="6" viewBox="0 0 12 6" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.0075 2.25H0V3.75H9.0075V6L12 3L9.0075 0V2.25Z" fill="#304163"/>
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="info-item">
                    <div className="img">
                        <img src="/assets/img/posts/Creation process-bro.svg" alt="Разработка сайта-визитки" />
                    </div>
                    <div className="text-content">
                        <h5 className="mb-20">Разработка сайта-визитки</h5>
                        <p className="mb-20">
                            Сайт-визитка — это сайт, содержащий в себе несколько страниц, оформленные в едином
                            стиле и расположены на одном доменном имени.
                        </p>
                        <Link href="/info/site-types/cutaway">
                            <a className="read-more">
                                Подробнее
                                <svg width="12" height="6" viewBox="0 0 12 6" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.0075 2.25H0V3.75H9.0075V6L12 3L9.0075 0V2.25Z" fill="#304163"/>
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="info-item">
                    <div className="img">
                        <img src="/assets/img/posts/Customer Survey-bro.svg" alt="Разработка интернет-магазина" />
                    </div>
                    <div className="text-content">
                        <h5 className="mb-20">Разработка интернет-магазина</h5>
                        <p className="mb-20">
                            Интернет-магазин — это совокупность современных веб-технологий, при помощи которых сегодня пользователь интернета может с легкостью заказать себе еду, купить одежду, вообще что угодно.
                        </p>
                        <Link href="/info/site-types/eshop">
                            <a className="read-more">
                                Подробнее
                                <svg width="12" height="6" viewBox="0 0 12 6" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.0075 2.25H0V3.75H9.0075V6L12 3L9.0075 0V2.25Z" fill="#304163"/>
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="info-item">
                    <div className="img">
                        <img src="/assets/img/posts/Experts-bro.svg" alt="Разработка корпоративного сайта" />
                    </div>
                    <div className="text-content">
                        <h5 className="mb-20">Разработка корпоративного сайта</h5>
                        <p className="mb-20">
                            Корпоративный сайт — это что то вроде виртуального офиса, который может встретить посетителя, ознакомить с компанией, и даже повзаимодействовать с ним.
                        </p>
                        <Link href="/info/site-types/corp">
                            <a className="read-more">
                                Подробнее
                                <svg width="12" height="6" viewBox="0 0 12 6" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.0075 2.25H0V3.75H9.0075V6L12 3L9.0075 0V2.25Z" fill="#304163"/>
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </LayoutNews>
    )
}
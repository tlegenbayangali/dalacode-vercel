import Link from "next/link";
import LayoutNews from "../../components/layouts/layout-news";

export default function SiteTypes() {
    return (
        <LayoutNews title={'Инфо'}>
            <div className="col-lg-12">
                <div className="info-item">
                    <div className="img">
                        <img src="/assets/img/posts/Tabs-bro.svg" alt="Типы сайтов" />
                    </div>
                    <div className="text-content">
                        <h5 className="mb-20">Какие типы сайтов бывают?</h5>
                        <p className="mb-20">
                            При разработке сайта необходимо определить требования к сайту. Будет ли он рекламировать товар, онлайн продажа, информирование клиентов и тд.
                        </p>
                        <Link href="/info/site-types">
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
                        <img src="/assets/img/posts/Data points-bro.svg" alt="Исследование бизнеса" />
                    </div>
                    <div className="text-content">
                        <h5 className="mb-20">Исследование бизнеса.</h5>
                        <p className="mb-20">
                            При разработке сайта необходимо определить требования к сайту. Будет ли он рекламировать товар, онлайн продажа, информирование клиентов и тд.
                        </p>
                        <Link href="/info/research">
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
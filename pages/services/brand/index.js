import LayoutNews from "../../../components/layouts/layout-news";
import Link from "next/link";

export default function BrandingIndex() {
    return (
        <LayoutNews title={'Брендинг компании'}>
            <div className="col-lg-12">
                <div className="info-item">
                    <div className="img">
                        <img src="/assets/img/Social ideas-bro.svg" alt="Что такое брендинг компании?" />
                    </div>
                    <div className="text-content">
                        <h5 className="mb-20">Что такое брендинг компании?</h5>
                        <p className="mb-20">
                            Никогда не задумывались, благодаря чему всемирно известные бренды
                            узнаваемы? Если задумались, то это к путь к улучшению дел в Вашем бизнесе.
                        </p>
                        <Link href="/services/brand/branding">
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
                        <img src="/assets/img/Checklist-bro.svg" alt="Что такое гайдлайн?" />
                    </div>
                    <div className="text-content">
                        <h5 className="mb-20">Что такое гайдлайн?</h5>
                        <p className="mb-20">
                            Никогда не задумывались, благодаря чему всемирно известные бренды
                            узнаваемы? Если задумались, то это к путь к улучшению дел в Вашем бизнесе.
                        </p>
                        <Link href="/services/brand/guideline">
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
import { motion } from "framer-motion";
import Link from "next/link";
import CustomHead from "../../components/partials/head/head";

export default function InfoIndex() {
    return (
        <>
            <CustomHead pageTitle={'Инфо'} />
            <div className="info pt-120 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="mb-30">Инфо</h4>
                        </div>
                    </div>
                    <div className="row dalacode-grid">
                        <motion.div variants={{
                            from: {
                                y: 20,
                                opacity: 0
                            },
                            to: {
                                y: 0,
                                opacity: 1
                            },
                            exit: {
                                y: 20,
                                opacity: 0
                            }
                        }} className="col-lg-12">
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
                                    <Link href="/info/lp">
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
                        </motion.div>
                        <motion.div variants={{
                            from: {
                                y: 20,
                                opacity: 0
                            },
                            to: {
                                y: 0,
                                opacity: 1
                            },
                            exit: {
                                y: 20,
                                opacity: 0
                            }
                        }} className="col-lg-12">
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
                                    <Link href="/info/cutaway">
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
                        </motion.div>
                        <motion.div variants={{
                            from: {
                                y: 20,
                                opacity: 0
                            },
                            to: {
                                y: 0,
                                opacity: 1
                            },
                            exit: {
                                y: 20,
                                opacity: 0
                            }
                        }} className="col-lg-12">
                            <div className="info-item">
                                <div className="img">
                                    <img src="/assets/img/posts/Customer Survey-bro.svg" alt="Разработка интернет-магазина" />
                                </div>
                                <div className="text-content">
                                    <h5 className="mb-20">Разработка интернет-магазина</h5>
                                    <p className="mb-20">
                                        Сайт-визитка — это сайт, содержащий в себе несколько страниц, оформленные в едином
                                        стиле и расположены на одном доменном имени.
                                    </p>
                                    <Link href="/info/eshop">
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
                        </motion.div>
                        <motion.div variants={{
                            from: {
                                y: 20,
                                opacity: 0
                            },
                            to: {
                                y: 0,
                                opacity: 1
                            },
                            exit: {
                                y: 20,
                                opacity: 0
                            }
                        }} className="col-lg-12">
                            <div className="info-item">
                                <div className="img">
                                    <img src="/assets/img/posts/Experts-bro.svg" alt="Разработка корпоративного сайта" />
                                </div>
                                <div className="text-content">
                                    <h5 className="mb-20">Разработка корпоративного сайта</h5>
                                    <p className="mb-20">
                                        Сайт-визитка — это сайт, содержащий в себе несколько страниц, оформленные в едином
                                        стиле и расположены на одном доменном имени.
                                    </p>
                                    <Link href="/info/corp">
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
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}
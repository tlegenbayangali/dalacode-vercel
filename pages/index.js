import ServicesGrid from "../components/partials/services-grid/services-grid";
import PortfolioGrid from "../components/partials/portfolio-grid/portfolio-grid";
import Link from "next/link";
import { motion } from "framer-motion";
import CustomHead from "../components/partials/head/head";

export default function Index() {
    return (
        <>
            <CustomHead pageTitle={'Главная'} />
            <div className="hero" id="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="row">
                            <div className="col-lg-9">
                                <motion.div variants={{
                                    from: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    to: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -20
                                    }
                                }} className="hero-heading mb-30">
                                    Разрабатываем, оптимизируем, <br/>
                                    и поддерживаем веб-проекты.
                                </motion.div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <motion.p variants={{
                                    from: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    to: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -20
                                    }
                                }} className="mb-60">
                                    Ни для кого не секрет, что для ведения бизнеса в сети Интернета нужен грамотный
                                    подход, подкрепленный опытом проб и ошибок. Мы через все это прошли и готовы
                                    помочь Вам!
                                </motion.p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <motion.div variants={{
                                    from: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    to: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -20
                                    }
                                }} >
                                    <Link href="/brief"><a className="btn lg">Заполнить бриф</a></Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services pt-60 pb-60 dalacode-secondary" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="mb-30">Наши услуги</h4>
                        </div>
                    </div>
                    <ServicesGrid />
                </div>
            </div>
            <div className="portfolio pt-60 pb-60" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="mb-30">Портфолио</h4>
                        </div>
                    </div>
                    <PortfolioGrid />
                </div>
            </div>
        </>
    )
}

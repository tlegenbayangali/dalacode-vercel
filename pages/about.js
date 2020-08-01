import Link from "next/link";
import OurTeam from "../components/partials/our-team/our-team";
import { motion } from "framer-motion";
import CustomHead from "../components/partials/head/head";

export default function About() {
    return (
        <>
            <CustomHead pageTitle={'О нас'} />
            <div className="about pt-120 pb-60" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <motion.div variants={{
                            from: {
                                x: -20,
                                opacity: 0
                            },
                            to: {
                                x: 0,
                                opacity: 1
                            },
                            exit: {
                                x: -20,
                                opacity: 0
                            }
                        }} className="col-lg-6">
                            <h1 className="mb-30">О нас</h1>
                            <p className="mb-30">Приветствуем Вас на нашем сайте! Мы — команда dalacode!</p>
                            <p className="mb-30">Кто мы, и чем мы занимаемся? Мы занимаемся разработкой веб-сайтов
                                высокого качества, а так же поддержкой и обслуживанием веб-сайтов и мобильных
                                приложений. Все наши услуги можно просмотреть на странице <Link href="/services"><a
                                    className="dalacode-link">«Услуги»</a></Link></p>
                            <p className="mb-30">Все еще сомневаетесь? Просто напишите нам!</p>
                            <Link href="/brief"><a className="btn md">Заполнить бриф</a></Link>
                        </motion.div>
                        <motion.div variants={{
                            from: {
                                x: 20,
                                opacity: 0
                            },
                            to: {
                                x: 0,
                                opacity: 1
                            },
                            exit: {
                                x: 20,
                                opacity: 0
                            }
                        }} className="col-lg-6">
                            <img src="/assets/img/Working-bro.svg" alt="dalacode.kz - о нас" />
                        </motion.div>
                    </div>
                </div>
            </div>
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
            }}>
                <OurTeam />
            </motion.div>
        </>
    )
}
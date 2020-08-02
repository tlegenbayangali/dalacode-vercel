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
                    <div className="row">
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

                            <p className="mb-30">Приветствуем Вас! Мы — dalacode!</p>
                            <p className="mb-30">Нашу компанию основали выпускники кафедры информационных систем и технологий. На протяжении всего времени обучения мы изучали и практиковали современные веб-технологии.</p>
                            <p className="mb-30">А сегодня мы организовали компанию «dalacode», и готовы помочь государственным учреждениям и бизнесменам в цифровизации и выводе их деятельности в сеть.</p>
                            <p className="mb-30">Мы готовы помочь решить неотложные в Вашей деятельности задачи, связанные с веб-пространством. У нас нет "готовых решений", так как каждая ситуация индивидуально обрабатывается командой маркетологов, дизайнеров и разработчиков.</p>
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
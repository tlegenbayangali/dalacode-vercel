import { motion } from "framer-motion";

export default function Contacts() {
    return (
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
                        <h2 className="mb-30">Контакты</h2>
                        <h6 className="mb-30">
                            Что-то заинтересовало? Свяжитесь с нами, мы обязательно Вам поможем...
                        </h6>
                        <div className="contacts mb-30">
                            <a href="tel:+77477316900" className="contacts-item contacts-phone mb-20">+7 (747)
                                731-6900</a>
                            <a href="mailto:info@dalacode.kz"
                               className="contacts-item contacts-email">info@dalacode.kz</a>
                        </div>
                        <address>
                            <div className="mb-30 contacts-map">
                                <iframe src="https://yandex.kz/map-widget/v1/-/CCQh4FAiPD"></iframe>
                            </div>
                            <p className="contacts-item contacts-address">Республика Казахстан, Западно-Казахстанская
                                область, <br />г. Уральск, ул. Ихсанова, 2</p>
                        </address>
                        <a href="#" className="btn md">Заполнить бриф</a>
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
                        <img src="/assets/img/Active Support-bro.svg" alt="dalacode.kz - контакты" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
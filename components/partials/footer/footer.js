import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="footer-top dalacode-secondary pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 footer-column">
                            <h4 className="mb-20">Есть идеи?</h4>
                            <a className="email-lg" href="mailto:info@dalacode.kz">info@dalacode.kz</a>
                        </div>
                        <div className="col-lg-2 col-sm-4 footer-column">
                            <h6 className="mb-20">Анализ</h6>
                            <ul className="footer-menu">
                                <li><Link href="/info/research"><a>Исследование</a></Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-8 footer-column">
                            <h6 className="mb-20">Бренд</h6>
                            <ul className="footer-menu">
                                <li><Link href="/services/brand/branding"><a>Брендбук</a></Link></li>
                                <li><Link href="/services/brand/guideline"><a>Гайдлайн</a></Link></li>
                                <li><Link href="/services/brand/logo"><a>Логотип</a></Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-4 footer-column">
                            <h6 className="mb-20">Дизайн</h6>
                            <ul className="footer-menu">
                                <li><Link href="/services/uxui"><a>UX/UI</a></Link></li>
                                <li><Link href="/info/webdesign"><a>Веб-дизайн</a></Link></li>
                                <li><Link href="/info/prototype"><a>Прототипирование</a></Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-8 footer-column">
                            <h6 className="mb-20">Разработка</h6>
                            <ul className="footer-menu">
                                <li><Link href="/services/webdev"><a>Веб-разработка</a></Link></li>
                                <li><Link href="/info/online-service"><a>Онлайн-сервис</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom dalacode-dark-gray pt-20 pb-20 jcc">
                <span>ИП «Western Method» <br />Все права защищены.</span>
            </div>
        </footer>
    )
}
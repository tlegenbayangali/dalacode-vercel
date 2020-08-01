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
                                <li><a href="#">Исследование</a></li>
                                <li><a href="#">Стратегия</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-8 footer-column">
                            <h6 className="mb-20">Бренд</h6>
                            <ul className="footer-menu">
                                <li><a href="#">Брендбук</a></li>
                                <li><a href="#">Гайдлайн</a></li>
                                <li><a href="#">Логотип</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-4 footer-column">
                            <h6 className="mb-20">Дизайн</h6>
                            <ul className="footer-menu">
                                <li><a href="#">UX/UI</a></li>
                                <li><a href="#">Веб-дизайн</a></li>
                                <li><a href="#">Прототипирование</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-8 footer-column">
                            <h6 className="mb-20">Разработка</h6>
                            <ul className="footer-menu">
                                <li><a href="#">Веб-разработка</a></li>
                                <li><a href="#">Сервис</a></li>
                                <li><a href="#">Для клиентов</a></li>
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
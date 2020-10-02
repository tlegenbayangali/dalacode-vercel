export default function PortfolioGrid() {
    return (
        <div className="row dalacode-grid">
            <div className="col-lg-6">
                <div className="portfolio-item">
                    <picture>
                        <source srcSet={'/assets/img/portfolio/vertical_cards_mockup.jpg'} type="image/webp" />
                        <img className="portfolio-item__image mb-10" src="/assets/img/portfolio/vertical_cards_mockup.jpg" alt="Брендбук компании Airsoft" />
                    </picture>
                    <h6 className="mb-10">
                        Онлайн журнал «Семейные Заметки»
                    </h6>
                    <div className="dalacode-tags">
                        <ul>
                            <li>Редизайн</li>
                            <li>Сайт</li>
                            <li>Бренд</li>
                        </ul>
                    </div>
                    <a href="https://www.behance.net/gallery/102280223/onlajn-zhurnal-semejnye-zametki" target="_blank" className="read-more">
                        Подробнее
                        <svg width="12" height="6" viewBox="0 0 12 6" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.0075 2.25H0V3.75H9.0075V6L12 3L9.0075 0V2.25Z" fill="#304163"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
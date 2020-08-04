
import Link from "next/link";
import CustomHead from "../../components/partials/head/head";

export default function WebDev() {
    return (
        <>
            <CustomHead pageTitle={'Разработка веб-сайта'} />
            <div className="pt-120 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h5 className="mb-20">Разработка веб-сайта.</h5>
                            <p className="mb-20">В наши дни уже трудно представить бизнес без Интернета. Наверное,
                                потому что он Интернет — это сегодняшний мир обитания почти каждого потенциального
                                клиента.</p>
                            <p className="mb-20">При развитии бизнеса наступает момент, когда кажется, что что-то не
                                дает расти, что-то ограничивает потенциал. Наверное, в первую очередь, стоит задуматься
                                над выходом в Интернет и стать конкурентоспособным игроком на рынке.</p>
                            <p className="mb-20">В этом Вам поможет правильно построенный веб-сайт. Грамотно
                                разработанный веб-сайт в купе с правильной бизнес-логикой покажет свои результаты в
                                кратчайшие сроки. Наверное, каждому бизнесу, не важно какому, стоит задуматься над этим
                                вопросом.</p>
                            <p>Уже более 4 лет наши разработчики совершенствуются и изучают современные технологии для
                                достижения высоких результатов: быстрая скорость работы, простота и гармоничность сайта.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="/assets/img/Development-bro.svg" alt="Разработка веб-сайта"
                                 className="dalacode-right-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="dalacode-secondary pt-60 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <img className="dalacode-left-img" src="/assets/img/No data-bro.svg"
                                 alt="Какой сайт мне нужен?" />
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <h5 className="mb-20">Какой сайт мне нужен?</h5>
                            <p className="mb-20">Бизнес бывает разным. И для того, что бы правильно разработать веб-сайт
                                под Ваше дело, необходимо определиться, какие требования у Вас к сайту.</p>
                            <p className="mb-20">Вот типы сайтов, которые считаются наиболее абстрактными, и дают общее
                                понятие о будущем проекте:</p>
                            <ul className="type-1 mb-20">
                                <li>
                                    <Link href="/info/lp">
                                        <a className="dalacode-link">Посадочная страница (Landing Page)</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/info/cutaway">
                                        <a className="dalacode-link">Сайт-визитка</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/info/eshop">
                                        <a className="dalacode-link">Интернет-магазин</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/info/corp">
                                        <a className="dalacode-link">Корпоративный сайт</a>
                                    </Link>
                                </li>
                            </ul>
                            <p><em>!!! Вы можете изучить информацию по типам сайтов в нашем <Link href="/info"><a className="dalacode-link">«dalacode
                                info»</a></Link> разделе</em></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="jcc">
                                <a href="/brief/webdev" className="mt-30 btn md">Заказать услугу</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="iteration" className="iteration web-development pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h5 className="mb-30">Краткое описание рабочего процесса:</h5>
                        </div>
                    </div>
                    <div className="row dalacode-grid">
                        <div className="col-lg-6">
                            <Link href="/brief">
                                <a className="iteration-item client-side">
                                    <svg className="iteration-item__img" xmlns="http://www.w3.org/2000/svg" height="24"
                                         viewBox="0 0 24 24" width="24">
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                                    </svg>
                                    <h6 className="iteration-item__title">
                                        01. Заполнение брифа.
                                    </h6>
                                    <p className="iteration-item__description">
                                        Мы разработали удобный бриф для максимально комфортного заполнения. <br/>
                                        <em>(кликните по блоку для заполнения брифа)</em>
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link href="/services/uxui">
                                <a className="iteration-item team-side">
                                    <svg className="iteration-item__img" xmlns="http://www.w3.org/2000/svg" height="24"
                                         viewBox="0 0 24 24" width="24">
                                        <path
                                            d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z"/>
                                    </svg>
                                    <h6 className="iteration-item__title">
                                        02. Прототип (UX).
                                    </h6>
                                    <p className="iteration-item__description">
                                        UX-дизайн — один из важнейших этапов при разработке любого приложения, будь то веб-сайт или
                                        мобильное приложение. <br/>
                                        <em>(кликните по блоку для подробной информации)</em>
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link href="/services/uxui">
                                <a className="iteration-item team-side">
                                    <svg className="iteration-item__img" xmlns="http://www.w3.org/2000/svg" height="24"
                                         viewBox="0 0 24 24" width="24">
                                        <path
                                            d="M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z"/>
                                    </svg>
                                    <h6 className="iteration-item__title">
                                        03. Разработка дизайна (UI).
                                    </h6>
                                    <p className="iteration-item__description">
                                        После утверждения UX-состовляющей проекта, наши дизайнеры приступают к подбору шрифтов,
                                        цветов и многого другого. <br/>
                                        <em>(кликните по блоку для ознакомления)</em>
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link href="/info/coding">
                                <a className="iteration-item team-side">
                                    <svg className="iteration-item__img" xmlns="http://www.w3.org/2000/svg" height="24"
                                         viewBox="0 0 24 24" width="24">
                                        <path
                                            d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"/>
                                    </svg>
                                    <h6 className="iteration-item__title">
                                        04. Кодинг. Много кодинга.
                                    </h6>
                                    <p className="iteration-item__description">
                                        На данном этапе наши разработчики превращают картинку из редактора в код, работающем в
                                        браузере. <br/>
                                        <em>(кликните по блоку для ознакомления)</em>
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link href="/info/testing">
                                <a className="iteration-item team-side">
                                    <svg className="iteration-item__img" xmlns="http://www.w3.org/2000/svg" height="24"
                                         viewBox="0 0 24 24" width="24">
                                        <path
                                            d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"/>
                                    </svg>
                                    <h6 className="iteration-item__title">
                                        05. Тестирование проекта.
                                    </h6>
                                    <p className="iteration-item__description">
                                        На данном этапе выявляются баги или ошибки, если таковые существуют, и оперативно
                                        исправляются нашими разработчиками. <br/>
                                        <em>(кликните по блоку для ознакомления)</em>
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link href="/info/publicate">
                                <a className="iteration-item team-side">
                                    <svg className="iteration-item__img" xmlns="http://www.w3.org/2000/svg"
                                         enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
                                        <rect fill="none" height="24" width="24"/>
                                        <path
                                            d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M19,8 c0,1.3-0.84,2.4-2,2.82V7h2V8z"/>
                                    </svg>
                                    <h6 className="iteration-item__title">
                                        06. Финал.
                                    </h6>
                                    <p className="iteration-item__description">
                                        После того, как все этапы разработки пройдены, проект публикуется на удаленном сервере,
                                        настраивается хостинг и привязывается домен. <br/>
                                        <em>(кликните по блоку для ознакомления)</em>
                                    </p>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="jcc">
                                <Link href="/services">
                                    <a className="btn md secondary mt-30">
                                        Вернуться к списку
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
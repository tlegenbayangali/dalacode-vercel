
import Link from "next/link";
import CustomHead from "../../components/partials/head/head";

export default function Seo() {
    return (
        <>
            <CustomHead pageTitle={'SEO-оптимизация'} />
            <div className="pt-120 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h4 className="mb-20">SEO оптимизация сайта.</h4>
                            <p className="mb-20">Ежедневно мы пользуемся услугами поисковых систем, находим информацию в
                                мгновенье око. Если приглядется к результатам выдачи, можно заметить, что по
                                определенным запросам некоторые сайты держат первые позиции. Всем известно, чем выше
                                позиция сайта в выдачах поисковых систем, тем больше трафика принесут нам Google и
                                Yandex (это поисковые системы).</p>
                            <p className="mb-20">Но как же добиться таких результатов для своего сайта?</p>
                            <p className="mb-20">— В первую очередь, стоит посмотреть в сторону SEO-оптимизации. А вот
                                что это такое, мы сейчас и расскажем.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="/assets/img/Finance-bro.svg" alt="SEO оптимизация сайта"
                                 className="dalacode-right-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="dalacode-secondary pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <img className="dalacode-left-img" src="/assets/img/Data report-bro.svg" alt="SEO" />
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <h5 className="mb-20">Что это и с чем его едят?</h5>
                            <p className="mb-20">SEO (Search Engine Optimization) — это система, позволяющая
                                разработчикам сайтов и поисковым системам "дружить". Это очень сложный и глубокий
                                процесс, на изучение которого уйдет не малое количество времени. Но в кратце мы, все же,
                                расскажем и покажем на примере.</p>
                            <p className="mb-20">К примеру, есть сайт организации «Глобус» (выдумано). Данная
                                организация занимается логистикой. Команда dalacode уже разработала для них
                                SEO-дружелюбный сайт. Что это значит? Это значит, что все необходимые мета-записи
                                команда разработчиков dalacode уже прописала. Тут мы подошли к интересным темам:
                                мета-записи страницы и семантика сайта.</p>
                            <p className="mb-20">Мета-записи — это что-то вроде удостоверения личности для человека. В
                                мета-записях SEO-специалисты описывают страницу: его краткое описание, ключевые слова,
                                какие устройства или какой язык поддерживается данной страницей.</p>
                            <p className="mb-20">Семантика сайта — это распределение элементам ролей. Семантика очень
                                похожа на менеджмент какой-либо компании, где у каждого работника есть своя должность и
                                обязанности. Так и у сайта, только вместо организации выступает сам сайт, а вместо
                                работников — теги страницы.</p>
                            <p className="mb-20">Для чего нужно такое структурирование? — Для порядка, которым будет
                                пользоваться робот поисковых систем.</p>
                            <p>Надеемся, в общих чертах Вы поняли о чем идет речь. Если интересует данная услуга, то
                                просто нажмите на кнопку ниже, и мы обязательно свяжемся с Вами!</p>
                            <a href="/brief/seo" className="mt-30 btn md">Заказать услугу</a>
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
                            <Link href="/info/research#site">
                                <a className="iteration-item team-side">
                                    <svg className="iteration-item__img" width="50" height="50" viewBox="0 0 50 50"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.2501 39.125L13.7709 43.75L17.1459 40.5417L22.9167 24.7084C21.5001 24.3542 20.2501 23.6459 19.2292 22.6667L13.2501 39.125Z"
                                            fill="#232323"/>
                                        <path
                                            d="M30.7709 22.6667C29.75 23.6459 28.4792 24.3542 27.0834 24.7084L32.8542 40.5417L36.2292 43.75L36.7709 39.125L30.7709 22.6667Z"
                                            fill="#232323"/>
                                        <path
                                            d="M31.25 16.6667C31.25 13.9583 29.5 11.6667 27.0833 10.7917V6.25H22.9167V10.7917C20.5 11.6667 18.75 13.9583 18.75 16.6667C18.75 20.125 21.5417 22.9167 25 22.9167C28.4583 22.9167 31.25 20.125 31.25 16.6667ZM25 18.75C23.8542 18.75 22.9167 17.8125 22.9167 16.6667C22.9167 15.5208 23.8542 14.5833 25 14.5833C26.1458 14.5833 27.0833 15.5208 27.0833 16.6667C27.0833 17.8125 26.1458 18.75 25 18.75Z"
                                            fill="#232323"/>
                                    </svg>
                                    <h6 className="iteration-item__title">
                                        02. Изучение сайта.
                                    </h6>
                                    <p className="iteration-item__description">
                                        После заполнения ТЗ по ключевым словам мы изучаем ваш сайт и выявляем слабые
                                        места. <br/>
                                        <em>(кликните по блоку для заполнения брифа)</em>
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link href="/info/research">
                                <a className="iteration-item team-side">
                                    <svg className="iteration-item__img" xmlns="http://www.w3.org/2000/svg" height="24"
                                         viewBox="0 0 24 24" width="24">
                                        <path
                                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                    </svg>
                                    <h6 className="iteration-item__title">
                                        03. Изучение рынка.
                                    </h6>
                                    <p className="iteration-item__description">
                                        После заполнения ТЗ по ключевым словам мы изучаем рынок Вашего бизнеса. <br/>
                                        <em>(кликните по блоку для заполнения брифа)</em>
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link href="/info/seo-optimize">
                                <a className="iteration-item team-side">
                                    <svg className="iteration-item__img" xmlns="http://www.w3.org/2000/svg"
                                         enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
                                        <g>
                                            <g>
                                                <path
                                                    d="M23,8c0,1.1-0.9,2-2,2c-0.18,0-0.35-0.02-0.51-0.07l-3.56,3.55C16.98,13.64,17,13.82,17,14c0,1.1-0.9,2-2,2s-2-0.9-2-2 c0-0.18,0.02-0.36,0.07-0.52l-2.55-2.55C10.36,10.98,10.18,11,10,11c-0.18,0-0.36-0.02-0.52-0.07l-4.55,4.56 C4.98,15.65,5,15.82,5,16c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.18,0,0.35,0.02,0.51,0.07l4.56-4.55C8.02,9.36,8,9.18,8,9 c0-1.1,0.9-2,2-2s2,0.9,2,2c0,0.18-0.02,0.36-0.07,0.52l2.55,2.55C14.64,12.02,14.82,12,15,12c0.18,0,0.36,0.02,0.52,0.07 l3.55-3.56C19.02,8.35,19,8.18,19,8c0-1.1,0.9-2,2-2S23,6.9,23,8z"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <h6 className="iteration-item__title">
                                        04. Оптимизация сайта.
                                    </h6>
                                    <p className="iteration-item__description">
                                        После изучения сайта и рынка мы приступаем к внутренней и внешней
                                        SEO-оптимизации вашего ресурса. <br/>
                                        <em>(кликните по блоку для заполнения брифа)</em>
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
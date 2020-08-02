
import Link from "next/link";
import CustomHead from "../../components/partials/head/head";

export default function UXUI() {
    return (
        <>
            <CustomHead pageTitle={'UX/UI разработка'} />
            <div className="pt-120 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h4 className="mb-20">UX/UI разработка.</h4>
                            <p className="mb-20">При разработке любого приложения, не важно, веб-приложение или
                                мобильное приложение, на ранних этапах должны разрабатываться UX и UI дизайны.</p>
                            <p>Для чего это нужно? Мы расскажем об этом.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="/assets/img/Wireframing-bro.svg" alt="dalacode.kz - UX/UI разработка"
                                 className="dalacode-right-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="dalacode-secondary pt-60 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <img className="dalacode-left-img" src="/assets/img/Problem solving-bro.svg"
                                 alt="UX/UI разработка" />
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <h5 className="mb-20">Что такое UX?</h5>
                            <p className="mb-20">Наверное, стоит понять, что это за термины и для чего они служат. Будем
                                идти по порядку.</p>
                            <p className="mb-20"><strong>UX</strong> — что в переводе с английского означает "опыт
                                пользователя". Чтобы быть точнее, подразумивается опыт взаимодействия пользователя с
                                приложением. </p>
                            <p className="mb-20">Можно сравнить с планировкой в доме. При строительстве дома в первую
                                очередь мы продумываем где и как будут расположены комнаты, их количество, расположение
                                дверей, элекрических розеток, отопительных радиаторов и множество мелочей, которые в
                                будущем сделают наш дом удобным. Можно сказать, что на данном этапе мы продумываем что,
                                где и как должно распологаться, не задумываясь о цветах, исполнении материалов и тд.
                                Точно так же происходит процесс проектирования расположения кнопок, изображений или меню
                                в приложении, при этом, мы пока не задумываемся о цветах, шрифтах или каких-то
                                дополнительных элементах оформления.</p>
                            <a href="/brief/uxui" className="mt-30 btn md">Заказать услугу</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-60 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h5 className="mb-20">Что такое UI?</h5>
                            <p className="mb-20"><strong>UI</strong> — в переводе с английского "интерфейс
                                пользователя". На данном этапе, по аналогии с домом, мы подбираем цвета красок, обоев
                                или дверей. На данном этапе принципиально важно какая люстра будет висеть в комнате,
                                какие дополнительные элементы декора будут присутствовать в дизайне нашего дома.</p>
                            <p className="mb-20">Ну с сайтом, соответственно, то же самое — на данном этапе
                                принципиально важно какой шрифт будет у нашего приложения/веб-приложения, какие цвета
                                будут использоваться и многое другое. <strong>Если UX — это удобство, то UI — это
                                    комфорт.</strong></p>
                            <a href="/brief/uxui" className="mt-30 btn md">Заказать услугу</a>
                        </div>
                        <div className="col-lg-6">
                            <img className="dalacode-left-img" src="/assets/img/Social Dashboard-bro.svg"
                                 alt="UX/UI разработка" />
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
                            <Link href="/info/uxui">
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
                                        UX-дизайн — один из важнейших этапов при разработке любого приложения, будь то
                                        веб-сайт или мобильное приложение. <br/>
                                        <em>(кликните по блоку для подробной информации)</em>
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link href="/services/uxui#ui">
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
                                        После утверждения UX-составляющей проекта, наши дизайнеры приступают к подбору
                                        шрифтов, цветов и многого другого. <br/>
                                        <em>(кликните по блоку для ознакомления)</em>
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link href="/info/publicate">
                                <a className="iteration-item team-side">
                                    <svg className="iteration-item__img" xmlns="http://www.w3.org/2000/svg"
                                         enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
                                        <rect fill="none" height="24" width="24"/>
                                        <path
                                            d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M19,8 c0,1.3-0.84,2.4-2,2.82V7h2V8z"/>
                                    </svg>
                                    <h6 className="iteration-item__title">
                                        04. Финал.
                                    </h6>
                                    <p className="iteration-item__description">
                                        После того, как все этапы разработки пройдены, проект передается заказчику со
                                        всеми исходниками в одном архиве. <br/>
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
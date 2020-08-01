
import Link from "next/link";
import CustomHead from "../../components/partials/head/head";

export default function WebDev() {
    return (
        <>
            <CustomHead pageTitle={'Поддержка веб-сайта'} />
            <div className="pt-120 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h5 className="mb-20">Поддержка веб-сайта.</h5>
                            <p className="mb-20">Разработать сайт и настроить его — это только половина дела. Дело в
                                том, что для корректной работы сайта необходима техническая поддержка.</p>
                            <p className="mb-20">Конечно, после каждой разработки мы не оставляем своих клиентов один на
                                один с сайтом. После окончания разработки каждого проекта мы обучаем заказчика (или
                                сотрудника компании) всем базовым навыкам для дальнейшего поддержания сайта. Но, к
                                сожалению, ко всем нюансам малоопытного человека не подготовить.</p>
                            <p>Наша команда готова оказать полную поддержку Вашего проекта на длительный срок. Вам нужно
                                будет только управлять своим бизнесом. Сайт — это наша забота.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="/assets/img/Coding-bro.svg" alt="Поддержка веб-сайта"
                                 className="dalacode-right-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="dalacode-secondary pt-60 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <img className="dalacode-left-img" src="/assets/img/400 Error Bad Request-bro.svg"
                                 alt="Для чего вообще нужна поддержка?" />
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <h5 className="mb-20">Для чего вообще нужна поддержка?</h5>
                            <p className="mb-20">При поддержке веб-сайта могут возникнуть различные проблемы: упал
                                сервер, удалилась часть кода, испортили структуру кода, просрочена оплата за хостинг или
                                домен и тд. </p>
                            <p className="mb-20">Это все равно что купить машину — вроде удобно, она справляется со
                                своей задачей, едет куда повернут руль, но вдруг что-то в ней ломается. В первую очередь
                                автолюбитель обращается в специализированный центр за помощью. Конечно, данный
                                автолюбитель мог бы отремонтировать автомобиль и сам, но у него мало опыта, и он боится
                                доломать его.</p>
                            <p>Вот точно такая же ситуация и веб-сайтом. Если человек опытен в ведении сайта, то он без
                                проблем сможет поддерживать работоспособность проекта. Но таких случаев, как обычно,
                                мало. Именно поэтому наша команда включила данную услугу в перечень своих услуг.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="jcc">
                                <a href="/brief/support" className="mt-30 btn md">Заказать услугу</a>
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
                            <Link href="/info/accesses">
                                <a className="iteration-item client-side">
                                    <svg className="iteration-item__img" xmlns="http://www.w3.org/2000/svg" height="24"
                                         viewBox="0 0 24 24" width="24">
                                        <path
                                            d="M22 19h-6v-4h-2.68c-1.14 2.42-3.6 4-6.32 4-3.86 0-7-3.14-7-7s3.14-7 7-7c2.72 0 5.17 1.58 6.32 4H24v6h-2v4zm-4-2h2v-4h2v-2H11.94l-.23-.67C11.01 8.34 9.11 7 7 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.11 0 4.01-1.34 4.71-3.33l.23-.67H18v4zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
                                    </svg>
                                    <h6 className="iteration-item__title">
                                        02. Передача доступов.
                                    </h6>
                                    <p className="iteration-item__description">
                                        Передача доступов от хостинг и домен аккаунтов. Передача доступов FTP. <br />
                                        <em>(кликните по блоку для ознакомления)</em>
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-12">
                            <Link href="#">
                                <a className="iteration-item team-side">
                                    <svg className="iteration-item__img" xmlns="http://www.w3.org/2000/svg"
                                         enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
                                        <path
                                            d="M11,14H9c0-4.97,4.03-9,9-9v2C14.13,7,11,10.13,11,14z M18,11V9c-2.76,0-5,2.24-5,5h2C15,12.34,16.34,11,18,11z M7,4 c0-1.11-0.89-2-2-2S3,2.89,3,4s0.89,2,2,2S7,5.11,7,4z M11.45,4.5h-2C9.21,5.92,7.99,7,6.5,7h-3C2.67,7,2,7.67,2,8.5V11h6V8.74 C9.86,8.15,11.25,6.51,11.45,4.5z M19,17c1.11,0,2-0.89,2-2s-0.89-2-2-2s-2,0.89-2,2S17.89,17,19,17z M20.5,18h-3 c-1.49,0-2.71-1.08-2.95-2.5h-2c0.2,2.01,1.59,3.65,3.45,4.24V22h6v-2.5C22,18.67,21.33,18,20.5,18z"/>
                                    </svg>
                                    <h6 className="iteration-item__title">
                                        03. Активная и плодотворная работа.
                                    </h6>
                                    <p className="iteration-item__description">
                                        После передачи всех доступов наши сотрудники, готовые ответить на ваши запросы
                                        24/7, приступают к своему "веб-караулу" по поддержке работоспосоности Вашего
                                        веб-сайта.
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
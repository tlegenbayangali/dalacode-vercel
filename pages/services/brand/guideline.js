import CustomHead from "../../../components/partials/head/head";
import Link from "next/link";

export default function Guideline() {
    return (
        <>
            <CustomHead pageTitle={'Гайдлайн'} />
            <div className="pt-120 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h4 className="mb-20">Гайдлайн компании.</h4>
                            <p className="mb-20">У вас есть свое собственное видение <Link href="/services/brand/branding"><a className="dalacode-link">фирменного стиля</a></Link> Вашей компании.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="/assets/img/Checklist-bro.svg" alt="dalacode.kz - Гайдлайн компании"
                                 className="dalacode-right-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="dalacode-secondary pt-60 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <img className="dalacode-left-img" src="/assets/img/Sharing Ideas-bro.svg"
                                 alt="Брендинг компании" />
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <h5 className="mb-20">Как это поможет?</h5>
                            <p className="mb-20">На самом деле тут нет никаких технических сложностей. Скорее всего это
                                в первую очередь эстетика, то как клиенты будут воспринимать компанию с первого взгляда.
                                Но в современном мире мало качественно оказывать услугу или продавать качественный
                                товар. Если клиент об этом не узнает, он никогда не обратиться в Ваше компанию. Можно
                                сказать, что брендирование — это красивая блесна на конце удочки, которая помогает
                                поймать рыбу.</p>
                            <p>Если Вы задумывались над этим вопросом, то нет смысла откладывать это на завтра, так как
                                конкуренты уже вовсю используют все инструменты маркетинга.</p>
                            <a href="/brief/brand/branding" className="mt-30 btn md">Заказать услугу</a>
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
                            <Link href="/info/design/system">
                                <a className="iteration-item team-side">
                                    <svg className="iteration-item__img" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                                    </svg>
                                    <h6 className="iteration-item__title">
                                        02. Разработка дизайн-системы.
                                    </h6>
                                    <p className="iteration-item__description">
                                        Для фирменного стиля сегодня не обойтись без дизайн-системы. <br/>
                                        <em>(кликните по блоку для заполнения брифа)</em>
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link href="/info/design/templates">
                                <a className="iteration-item team-side">
                                    <svg className="iteration-item__img" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M43.75 6.25H6.24998C3.95831 6.25 2.08331 8.125 2.08331 10.4167V39.5833C2.08331 41.875 3.95831 43.75 6.24998 43.75H43.75C46.0416 43.75 47.9166 41.875 47.9166 39.5833V10.4167C47.9166 8.125 46.0416 6.25 43.75 6.25ZM43.75 39.5833H6.24998V10.4167H43.75V39.5833ZM22.9166 25H41.6666V37.5H22.9166V25Z" fill="#232323"/>
                                    </svg>
                                    <h6 className="iteration-item__title">
                                        03. Разработка дизайн-шаблонов.
                                    </h6>
                                    <p className="iteration-item__description">
                                        Дизайн-шаблоны необходимы для продвижения в социальных сетях. <br/>
                                        <em>(кликните по блоку для заполнения брифа)</em>
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link href="/info/design/final">
                                <a className="iteration-item team-side">
                                    <svg className="iteration-item__img" xmlns="http://www.w3.org/2000/svg"
                                         enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
                                        <rect fill="none" height="24" width="24"/>
                                        <path
                                            d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M19,8 c0,1.3-0.84,2.4-2,2.82V7h2V8z"/>
                                    </svg>
                                    <h6 className="iteration-item__title">
                                        04. Финал.
                                    </h6>
                                    <p className="iteration-item__description">
                                        После того, как все этапы разработки пройдены, все исходные материалы передаются заказчику. <br/>
                                        <em>(кликните по блоку для ознакомления)</em>
                                    </p>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="jcc">
                                <Link href="/services/brand">
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
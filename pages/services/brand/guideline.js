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
                            <p className="mb-20">У вас есть свое собственное видение фирменного стиля Вашей компании. Вы заказали <Link href="/services/brand/branding"><a className="dalacode-link">брендинг компании</a></Link>, Ваш имидж начинает подниматься, компания стала узнаемым брендом. Вроде все хорошо, но хорошо, пока вы не начнете рекламную компанию.</p>
                            <p>Дело в том, что дизайнеры рекламных агенств не знают "правила" Вашего дизайна компании. Они не знают, как можно использовать логотип, какие цвета присутствуют в Вашей дизайн-системе, какие шрифты можно использовать и тд. Возможно, они смогут поэкспериментировать над дизайном рекламы, возможно реклама, будь то баннер, видеоролик или пост в инстаграме, будет приятной на глаз и даже работать. Но в данном случае реклама стилитически не будет принадлежать Вашей компании.</p>
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
                                 alt="Гайдлайн" />
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <h5 className="mb-20">Как же быть?</h5>
                            <p className="mb-20">На самом деле в этом нет ничего страшного. Просто для наращивания узнаваемости Вашей компании необходимо быть немного строже к своим рекламным компаниям.</p>
                            <p className="mb-20">Человечество уже давно придумало гайдлайн. Гайдлайн — это набор правил использования элементов дизайна Вашей компании. То есть, гайдлайн — это своего рода кодекс дизайна компании для сторонних дизайнеров. В данном руководстве описывается все, что касается дизайна компании. </p>
                            <p><em>Гайдлайн уже входит в услугу разработки брендинг компании.</em></p>
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
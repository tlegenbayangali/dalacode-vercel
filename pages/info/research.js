import CustomHead from "../../components/partials/head/head";
import ChartHorizontalOne from "../../components/partials/chart/horizontal/chart-1";
import Link from "next/link";

export default function Research() {
    return (
        <>
            <CustomHead pageTitle={'Исследование бизнеса'} />
            <div className="service web-development pt-120 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h4 className="mb-20">Исследование бизнеса.</h4>
                            <p className="mb-20">Перед разработкой каждого проекта, не важно какая услуга оказывается, наша команда проводит исследование бизнеса.</p>
                            <p className="mb-20">Это может показаться ненужной формальностью, но согласитесь, чем стрелять из пушки по воробьям, лучше изучить бизнес, изучить то, что может принести прибыль.</p>
                            <p className="mb-20-xl">Мы изучаем бизнес-процесс, пытаемся выяснить как наш проект может помочь в реальных условиях. Этот этап — один из важных этапов любой разработки.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="/assets/img/posts/Data points-bro.svg" alt="Исследование бизнеса" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-types dalacode-secondary pt-60 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src="/assets/img/Setup-bro.svg" alt="В чем интерактивность корпоративного сайта?" />
                        </div>
                        <div className="col-lg-6">
                            <h5 className="mb-20">Кем проводится исследование?</h5>
                            <p className="mb-20">Исследование бизнеса проводится специально выделенным человеком, состоящий в команде разработки проекта. Данный человек полностью ознакамливается с бизнес-процессом компании заказчика, выявляет сильные и слабые стороны предприятия, что бы в будущем использовать их.</p>
                            <p>Наши специалисты проводят исследование только с целью дальнейшей разработки проекта под конкретные задачи, которые, соответственно, выводятся при помощи бизнес-анализа.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="jcc">
                                <Link href="/info">
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
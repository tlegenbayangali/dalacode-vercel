
import Link from "next/link";
import CustomHead from "../../components/partials/head/head";

export default function MobDev() {
    return (
        <>
            <CustomHead pageTitle={'Мобильная разработка'} />
            <div className="pt-120 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h4 className="mb-20">Мобильная разработка.</h4>
                            <p className="mb-20">Скоро мы запустим данную услугу...</p>
                            <a href="/services" className="btn md secondary mt-30">
                                Вернуться к списку
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <img src="/assets/img/To the stars-bro.svg" alt="dalacode.kz - Мобильная разработка"
                                 className="dalacode-right-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
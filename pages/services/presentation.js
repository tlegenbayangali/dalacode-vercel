
import Link from "next/link";
import CustomHead from "../../components/partials/head/head";

export default function Presentation() {
    return (
        <>
            <CustomHead pageTitle={'Разработка презентации'} />
            <div className="pt-120 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h5 className="mb-20">Разработка презентации.</h5>
                            <p className="mb-20">Скоро мы запустим данную услугу...</p>
                            <a href="/services" className="btn md secondary mt-30">
                                Вернуться к списку
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <img src="/assets/img/To the stars-bro.svg" alt="dalacode.kz - Разработка презентации"
                                 className="dalacode-right-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import Link from "next/link";

export default function Error404() {
    return (
        <>
            <div className="pt-60 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h4 className="mb-20">Страница не найдена.</h4>
                            <p className="mb-20">Возможно, ссылка, по которой Вы вошли, устарела...</p>
                            <Link href="/"><a className="btn md secondary mt-30">На главную</a></Link>
                        </div>
                        <div className="col-lg-6">
                            <img src="/assets/img/400 Error Bad Request-bro.svg" alt="dalacode.kz - Реконструкция сайта"
                                 className="dalacode-right-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import CustomHead from "../head/head";
import Link from "next/link";
import React from "react";

export default function Empty() {
    return (
        <>
            <CustomHead pageTitle={'Информация подготавливается'} />
            <div className="pt-120 pb-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h4 className="mb-20">Информация подготавливается.</h4>
                            <p className="mb-20">Мы хотим, что бы Вы были с нами на одной волне, для этого мы продолжаем писать статьи, связанные с нашей деятельностью для того, что бы и Вы понимали некоторые внутренние процессы. Просим прощения за предоставленные неудобства...</p>
                            <p className="mb-20">Все свои вопросы Вы всегда можете задать написав на почту <a className="dalacode-link" href="mailto:info@dalacode.kz">info@dalacode.kz</a></p>
                            <p className="mb-20">Ну или можно просто написать в онлайн чат в правом нижнем углу, мы обязательно Вам ответим в течение 5 минут.</p>
                            <Link href="/"><a className="btn md secondary mt-30">На главную</a></Link>
                        </div>
                        <div className="col-lg-6">
                            <img src="/assets/img/Bibliophile-bro.svg" alt="dalacode.kz - Реконструкция сайта"
                                 className="dalacode-right-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
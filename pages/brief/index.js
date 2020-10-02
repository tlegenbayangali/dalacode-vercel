import CustomHead from "../../components/partials/head/head";
import {motion} from "framer-motion";
import Link from "next/link";
import OurTeam from "../../components/partials/our-team/our-team";


export default function BriefIndex() {
    return (
        <>
            <CustomHead pageTitle={'Бриф'} />
            <div className="about pt-120 pb-60" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <h5 className="mb-10">Добро пожаловать!</h5>
                            <p>Пожалуйста, представьтесь:</p>
                        </div>
                        <div className="col-lg-7">
                            <img src="/assets/img/Community-bro.svg" alt="Бриф"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
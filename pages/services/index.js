import ServicesGrid from "../../components/partials/services-grid/services-grid";
import CustomHead from "../../components/partials/head/head";

export default function ServicesIndex() {
    return (
        <>
            <CustomHead pageTitle={'Наши услуги'} />
            <div className="services pt-120 pb-60 dalacode-secondary" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="mb-30">Наши услуги</h4>
                        </div>
                    </div>
                    <ServicesGrid />
                </div>
            </div>
        </>
    )
}
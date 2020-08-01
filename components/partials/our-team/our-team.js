import OurTeamSingle from "./our-team-single";

export default function OurTeam() {
    return (
        <div className="our-team dalacode-secondary pt-60 pb-60" id="our-team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="mb-30">
                            Наша команда
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <OurTeamSingle name={'John Doe'} photo={'/assets/img/s1200.png'} position={'Веб-разработчик'} />
                    <OurTeamSingle name={'John Doe'} photo={'/assets/img/s1200.png'} position={'Веб-разработчик'} />
                    <OurTeamSingle name={'John Doe'} photo={'/assets/img/s1200.png'} position={'Веб-разработчик'} />
                    <OurTeamSingle name={'John Doe'} photo={'/assets/img/s1200.png'} position={'Веб-разработчик'} />
                </div>
            </div>
        </div>
    )
}
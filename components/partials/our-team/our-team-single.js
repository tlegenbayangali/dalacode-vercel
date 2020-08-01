export default function OurTeamSingle({ name, position, photo }) {
    return (
        <div className="col-12 col-sm-6 col-lg-3">
            <div className="our-team-item">
                <div className="our-team--item">
                    <div className="our-team-item__avatar mb-20">
                        <img src={ photo } alt={ name } />
                    </div>
                    <div className="our-team-item__name mb-10">{ name }</div>
                    <div className="our-team-item__position">{ position }</div>
                </div>
            </div>
        </div>
    )
}
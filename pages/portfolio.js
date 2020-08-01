import PortfolioGrid from "../components/partials/portfolio-grid/portfolio-grid";
import  { motion } from "framer-motion";

export default function Portfolio() {
    return (
        <div className="portfolio pt-120 pb-60" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="mb-30">Портфолио</h4>
                    </div>
                </div>
                <motion.div variants={{
                    from: {
                        opacity: 0,
                        y: 20
                    },
                    to: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 20
                    }
                }}>
                    <PortfolioGrid />
                </motion.div>
            </div>
        </div>
    )
}
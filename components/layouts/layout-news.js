import {motion} from "framer-motion";
import Link from "next/link";
import CustomHead from "../partials/head/head";

export default function LayoutNews({title, children}) {
    return (
        <>
            <CustomHead pageTitle={title} />
            <div className="info pt-120 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="mb-30">{title}</h4>
                        </div>
                    </div>
                    <motion.div exit={'from'} variants={{
                        from: {
                            opacity: 0,
                            y: 20
                        },
                        to: {
                            opacity: 1,
                            y: 0
                        }
                    }} className="row dalacode-grid">
                        {children}
                    </motion.div>
                </div>
            </div>
        </>
    )
}
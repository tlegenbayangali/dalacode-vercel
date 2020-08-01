import '../public/assets/libs/bootstrap/bootstrap-grid.min.css'
import '../public/assets/css/style.scss'
import LayoutMain from "../components/layouts/layout-main"
import { motion, AnimatePresence } from 'framer-motion'

export default function MyApp({ Component, pageProps, router }) {
    return (
        <LayoutMain>
            <AnimatePresence exitBeforeEnter>
                <motion.div key={router.route} initial="from" animate="to" exit="exit" variants={{
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: 1,
                        transition: {
                            when: 'beforeChildren',
                            staggerChildren: .2
                        }
                    },
                    exit: {
                        opacity: 0,
                        transition: {
                            when: 'afterChildren',
                            staggerChildren: .2
                        }
                    }
                }}>
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </LayoutMain>
    )
}
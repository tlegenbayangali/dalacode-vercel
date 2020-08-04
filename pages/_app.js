import '../public/assets/libs/bootstrap/bootstrap-grid.min.css'
import '../public/assets/css/style.scss'
import LayoutMain from "../components/layouts/layout-main"
import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'

export default function MyApp({ Component, pageProps, router }) {

    useEffect(function() {
        window.replainSettings = { id: '01a5a3f6-93b2-47c0-b5aa-f7c29a59f907' };
        (function(u){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src=u;
            var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
        })('https://widget.replain.cc/dist/client.js');
    })

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
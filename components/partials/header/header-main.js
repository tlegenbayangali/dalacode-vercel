import LogoTop from "./logo-top";
import Link from "next/link";
import HeaderMenuWrapper from "./header-menu-wrapper";
import Headhesive from 'headhesive';
import React, { useEffect } from 'react';


export default function HeaderMain() {
    useEffect(function mount() {
        if (window.innerWidth >= 992) {
            const header = new Headhesive('.header')
        }
    })
    return (
        <header className="header header-main" id="header">
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="dalacode-col dalacode-col-wide">
                            <LogoTop />
                            <HeaderMenuWrapper />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
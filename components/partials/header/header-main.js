import LogoTop from "./logo-top";
import Link from "next/link";
import HeaderMenuWrapper from "./header-menu-wrapper";

export default function HeaderMain() {
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
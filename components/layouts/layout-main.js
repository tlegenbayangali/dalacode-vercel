import HeaderMain from "../partials/header/header-main";
import Footer from "../partials/footer/footer";

export default function LayoutMain({ children }) {
    return (
        <>
            <HeaderMain />
            { children }
            <Footer/>
        </>
    )
}
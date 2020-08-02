import MenuTop from "./menu-top"

function menuOpen() {
    const menuWrapper = document.querySelector('.dalacode-nav-wrapper')
    const overlay = document.querySelector('.dalacode-nav-overlay')

    menuWrapper.classList.add('opened')
    overlay.classList.add('opened')

}

function menuClose() {
    const menuWrapper = document.querySelector('.dalacode-nav-wrapper')
    const overlay = document.querySelector('.dalacode-nav-overlay')

    menuWrapper.classList.remove('opened')
    overlay.classList.remove('opened')

}

export default function HeaderMenuWrapper() {
    return (
        <>
            <div className="dalacode-nav-overlay"></div>
            <div className="dalacode-nav-wrapper">
                <svg className="dalacode-nav-close" onClick={ menuClose } xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24" fill="black">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                </svg>
            <MenuTop />
            </div>
            <div className="dalacode-hamburger" onClick={ menuOpen }>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.75 22.5H26.25V20H3.75V22.5ZM3.75 16.25H26.25V13.75H3.75V16.25ZM3.75 7.5V10H26.25V7.5H3.75Z"
                        fill="black"/>
                </svg>
            </div>
        </>
    )
}
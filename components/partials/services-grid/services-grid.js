import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesGrid() {
    return (
        <>
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
            }} className="row dalacode-grid">
                <div className="col-lg-6">
                    <Link href="/services/webdev">
                        <a className="services-item">
                            <div className="left">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M45.8334 18.75V14.5833H41.6667V10.4167C41.6667 8.125 39.7917 6.25 37.5001 6.25H8.33341C6.04175 6.25 4.16675 8.125 4.16675 10.4167V39.5833C4.16675 41.875 6.04175 43.75 8.33341 43.75H37.5001C39.7917 43.75 41.6667 41.875 41.6667 39.5833V35.4167H45.8334V31.25H41.6667V27.0833H45.8334V22.9167H41.6667V18.75H45.8334ZM37.5001 39.5833H8.33341V10.4167H37.5001V39.5833ZM12.5001 27.0833H22.9167V35.4167H12.5001V27.0833ZM25.0001 14.5833H33.3334V20.8333H25.0001V14.5833ZM12.5001 14.5833H22.9167V25H12.5001V14.5833ZM25.0001 22.9167H33.3334V35.4167H25.0001V22.9167Z"
                                        fill="#232323"/>
                                </svg>
                            </div>
                            <div className="right ml-20">
                                <h6>
                                    Разработка веб-сайта
                                </h6>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link href="/services/reconstruction">
                        <a className="services-item">
                            <div className="icon-part mr-20">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M33.1332 27.1888L28.7138 31.6082L41.2059 44.1003L45.6253 39.6809L33.1332 27.1888Z"
                                        fill="#232323"/>
                                    <path
                                        d="M36.4583 20.8334C40.4791 20.8334 43.7499 17.5625 43.7499 13.5417C43.7499 12.3334 43.4166 11.2084 42.8958 10.2084L37.2708 15.8334L34.1666 12.7292L39.7916 7.10421C38.7916 6.58337 37.6666 6.25004 36.4583 6.25004C32.4374 6.25004 29.1666 9.52087 29.1666 13.5417C29.1666 14.3959 29.3333 15.2084 29.6041 15.9584L25.7499 19.8125L22.0416 16.1042L23.5208 14.625L20.5833 11.6875L24.9999 7.27087C22.5624 4.83337 18.6041 4.83337 16.1666 7.27087L8.79161 14.6459L11.7291 17.5834H5.85411L4.37494 19.0625L11.7499 26.4375L13.2291 24.9584V19.0625L16.1666 22L17.6458 20.5209L21.3541 24.2292L5.91661 39.6667L10.3333 44.0834L34.0416 20.3959C34.7916 20.6667 35.6041 20.8334 36.4583 20.8334Z"
                                        fill="#232323"/>
                                </svg>
                            </div>
                            <div className="text-part">
                                <h6>
                                    Реконструкция веб-сайта
                                </h6>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link href="/services/support">
                        <a className="services-item">
                            <div className="icon-part mr-20">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M25 4.16663C13.5 4.16663 4.16663 13.5 4.16663 25C4.16663 36.5 13.5 45.8333 25 45.8333C36.5 45.8333 45.8333 36.5 45.8333 25C45.8333 13.5 36.5 4.16663 25 4.16663ZM40.5416 19L34.75 21.3958C33.6875 18.5625 31.4583 16.3125 28.6041 15.2708L31 9.47913C35.375 11.1458 38.8541 14.625 40.5416 19ZM25 31.25C21.5416 31.25 18.75 28.4583 18.75 25C18.75 21.5416 21.5416 18.75 25 18.75C28.4583 18.75 31.25 21.5416 31.25 25C31.25 28.4583 28.4583 31.25 25 31.25ZM19.0208 9.45829L21.4583 15.25C18.5833 16.2916 16.3125 18.5625 15.25 21.4375L9.45829 19.0208C11.1458 14.625 14.625 11.1458 19.0208 9.45829ZM9.45829 30.9791L15.25 28.5833C16.3125 31.4583 18.5625 33.7083 21.4375 34.75L19 40.5416C14.625 38.8541 11.1458 35.375 9.45829 30.9791ZM31 40.5416L28.6041 34.75C31.4583 33.6875 33.7083 31.4375 34.75 28.5625L40.5416 31C38.8541 35.375 35.375 38.8541 31 40.5416Z"
                                        fill="#232323"/>
                                </svg>
                            </div>
                            <div className="text-part">
                                <h6>
                                    Поддержка веб-сайта
                                </h6>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link href="/services/seo">
                        <a className="services-item">
                            <div className="icon-part mr-20">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M33.3334 12.5L38.1042 17.2708L27.9375 27.4375L19.6042 19.1042L4.16669 34.5625L7.10419 37.5L19.6042 25L27.9375 33.3333L41.0625 20.2292L45.8334 25V12.5H33.3334Z"
                                        fill="#232323"/>
                                </svg>
                            </div>
                            <div className="text-part">
                                <h6>
                                    SEO - оптимизация
                                </h6>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link href="/services/mobdev">
                        <a className="services-item">
                            <div className="icon-part mr-20">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M37.5 2.10415L16.6667 2.08331C14.375 2.08331 12.5 3.95831 12.5 6.24998V12.5H16.6667V10.4166H37.5V39.5833H16.6667V37.5H12.5V43.75C12.5 46.0416 14.375 47.9166 16.6667 47.9166H37.5C39.7917 47.9166 41.6667 46.0416 41.6667 43.75V6.24998C41.6667 3.95831 39.7917 2.10415 37.5 2.10415ZM20.8333 31.25H25V16.6666H10.4167V20.8333H17.8958L6.25 32.4791L9.1875 35.4166L20.8333 23.7708V31.25Z"
                                        fill="#232323"/>
                                </svg>
                            </div>
                            <div className="text-part">
                                <h6>
                                    Мобильная разработка
                                </h6>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link href="/services/uxui">
                        <a className="services-item">
                            <div className="icon-part mr-20">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.2501 39.125L13.7709 43.75L17.1459 40.5417L22.9167 24.7084C21.5001 24.3542 20.2501 23.6459 19.2292 22.6667L13.2501 39.125Z"
                                        fill="#232323"/>
                                    <path
                                        d="M30.7709 22.6667C29.75 23.6459 28.4792 24.3542 27.0834 24.7084L32.8542 40.5417L36.2292 43.75L36.7709 39.125L30.7709 22.6667Z"
                                        fill="#232323"/>
                                    <path
                                        d="M31.25 16.6667C31.25 13.9583 29.5 11.6667 27.0833 10.7917V6.25H22.9167V10.7917C20.5 11.6667 18.75 13.9583 18.75 16.6667C18.75 20.125 21.5417 22.9167 25 22.9167C28.4583 22.9167 31.25 20.125 31.25 16.6667ZM25 18.75C23.8542 18.75 22.9167 17.8125 22.9167 16.6667C22.9167 15.5208 23.8542 14.5833 25 14.5833C26.1458 14.5833 27.0833 15.5208 27.0833 16.6667C27.0833 17.8125 26.1458 18.75 25 18.75Z"
                                        fill="#232323"/>
                                </svg>
                            </div>
                            <div className="text-part">
                                <h6>
                                    Дизайн UX/UI
                                </h6>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link href="/services/branding">
                        <a className="services-item">
                            <div className="icon-part mr-20">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.5833 33.3333C15.7291 33.3333 16.6666 34.2708 16.6666 35.4167C16.6666 37.7083 14.7916 39.5833 12.5 39.5833C12.1458 39.5833 11.8125 39.5417 11.4583 39.4792C12.1041 38.3333 12.5 36.9583 12.5 35.4167C12.5 34.2708 13.4375 33.3333 14.5833 33.3333ZM38.8958 6.25C38.3541 6.25 37.8333 6.45833 37.4166 6.85417L18.75 25.5208L24.4791 31.25L43.1458 12.5833C43.9583 11.7708 43.9583 10.4583 43.1458 9.64583L40.3541 6.85417C39.9375 6.4375 39.4166 6.25 38.8958 6.25ZM14.5833 29.1667C11.125 29.1667 8.33329 31.9583 8.33329 35.4167C8.33329 38.1458 5.91663 39.5833 4.16663 39.5833C6.08329 42.125 9.35413 43.75 12.5 43.75C17.1041 43.75 20.8333 40.0208 20.8333 35.4167C20.8333 31.9583 18.0416 29.1667 14.5833 29.1667Z"
                                        fill="#232323"/>
                                </svg>
                            </div>
                            <div className="text-part">
                                <h6>
                                    Брендинг компании
                                </h6>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link href="/services/presentation">
                        <a className="services-item">
                            <div className="icon-part mr-20">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M43.75 6.25H6.24998C3.95831 6.25 2.08331 8.125 2.08331 10.4167V39.5833C2.08331 41.875 3.95831 43.75 6.24998 43.75H43.75C46.0416 43.75 47.9166 41.875 47.9166 39.5833V10.4167C47.9166 8.125 46.0416 6.25 43.75 6.25ZM43.75 39.5833H6.24998V10.4167H43.75V39.5833ZM22.9166 25H41.6666V37.5H22.9166V25Z"
                                        fill="#232323"/>
                                </svg>
                            </div>
                            <div className="text-part">
                                <h6>
                                    Разработка презентации
                                </h6>
                            </div>
                        </a>
                    </Link>
                </div>
            </motion.div>
        </>
    )
}
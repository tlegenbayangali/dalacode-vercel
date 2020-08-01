import Link from "next/link";

export default function MenuTop() {
    return (
        <nav className="dalacode-nav">
            <ul>
                <li><Link href="/"><a>Главная</a></Link></li>
                <li><Link href="/about"><a>О нас</a></Link></li>
                <li><Link href="/info"><a>Инфо</a></Link></li>
                <li><Link href="/services"><a>Услуги</a></Link></li>
                <li><Link href="/portfolio"><a>Портфолио</a></Link></li>
                <li><Link href="/contacts"><a>Контакты</a></Link></li>
            </ul>
            <Link href="/brief"><a className="btn md ml-20">Заполнить бриф</a></Link>
        </nav>
    )
}
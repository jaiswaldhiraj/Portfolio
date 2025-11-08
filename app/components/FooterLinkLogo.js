import Link from 'next/link'
import { icons } from './icons'

const FooterLinkLogo = ({ href, icon }) => {
    const Icon = icons[icon]
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] hover:scale-110 transition-transform duration-150"

        >
            {Icon && <Icon />}
        </Link>
    )
}

export default FooterLinkLogo
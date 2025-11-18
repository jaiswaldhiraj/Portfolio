import { icons } from "./icons";


const ActiveChips = ({ href, text, icon }) => {
    const Icon = icons[icon];

    return (
        <a
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-[var(--accent)] text-xl text-[var(--accent-light)] rounded-3xl font-normal 
            hover:bg-[var(--accent-light-hover)] hover:text-[var(--accent)] "
        >
            {Icon && <Icon />}            
            {text}
        </a>
    );
};

export default ActiveChips;

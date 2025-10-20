import type { AppHeroProps, StoreButtonProps } from "config";
import { memo } from "react";
import fdroidIcon from '../../../public/icons/fdroid.webp';
import coffeeIcon from '../../../public/icons/coffee-logo.webp';
import kofiIcon from '../../../public/icons/kofi-logo.webp';
import iosIcon from '../../../public/icons/favicon-192.svg'
import faDownload from '../../../public/icons/flecha-hacia-abajo.png'

const AppHero = ({ title, description, storeLinks, logo }: AppHeroProps) => (
    <div className="mb-16 flex flex-col items-center md:items-start md:flex-row gap-8">
        <div className="flex-shrink-0 md:self-center">
            <div className="rounded-2xl border border-gray-200/50 dark:border-white/10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/[0.02] dark:to-white/[0.05] p-6 w-[192px] h-[192px] flex items-center justify-center shadow-sm">
                <img src={logo.src} alt="App Icon" className="h-40 w-40 rounded-2xl object-cover" />
            </div>
        </div>

        <div className="flex flex-1 flex-col justify-between text-center md:text-left">
            <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">{title}</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto md:mx-0">{description}</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">

                <StoreButton store="coffe" href={storeLinks.coffe} label="Invítanos a" storeName=" Un café!" />
                <StoreButton store="kofi" href={storeLinks.kofi} label="Apóyanos en" storeName=" Ko-fi" />
                <StoreButton store="fdroid" href={storeLinks.fdroid} label="Pronto en " storeName="F-droid" />
                <StoreButton store="direct" href={storeLinks.direct} label="Descarga " storeName="Directa" />
                <StoreButton store="ios" href={storeLinks.ios} label="Instalar en " storeName="IOs" />

            </div>
        </div>
    </div>
);

const StoreButton = memo(({ store, href, label, storeName }) => {
    const iconSrc = store === "fdroid" ? fdroidIcon : store === "coffe" ? coffeeIcon : store === "kofi" ? kofiIcon : store === "direct" ? faDownload : iosIcon;

    const handleClick = async (e) => {
        if (store === "direct") {
            e.preventDefault(); // evitar navegación inmediata

            try {
                const res = await fetch('/api/count-up', { method: 'POST' });
                const data = await res.json();
                console.log('Contador actualizado', data);
            } catch (err) {
                console.error("Error en contador:", err);
            }
            window.open(href, "_blank", "noopener,noreferrer"); // abrir enlace
        }
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className="group  flex items-center gap-3 rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/[0.04] px-5 py-3 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-white/[0.08] hover:border-gray-400 dark:hover:border-white/20 shadow-sm"
        >
            <div className="flex items-center justify-center w-7 h-7">
                <img src={iconSrc.src} alt={`${storeName} icon`} className="w-5 h-5" />
            </div>
            <span className="text-left">
                <div>{label}</div>
                <div>{storeName}</div>
            </span>
        </a>
    );
});

StoreButton.displayName = "StoreButton";

export default memo(AppHero);

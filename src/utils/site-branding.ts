export type TSiteBrand = {
    name: string;
    title: string;
    description: string;
};

const DEFAULT_BRAND: TSiteBrand = {
    name: 'THEGOAT',
    title: 'THEGOAT - Professional Trading Bot Builder & Copy Trading Platform',
    description:
        'Create profitable trading bots without coding. Professional Deriv trading bot builder with copy trading, free bots, and advanced strategies. Start trading smarter today!',
};

const DOMAIN_BRANDS: Record<string, TSiteBrand> = {
    'thegoat.netlify.app': {
        name: 'TheGoat Traders',
        title: 'TheGoat Traders - Professional Trading Bot Builder & Copy Trading Platform',
        description:
            'Create profitable trading bots without coding. TheGoat Traders gives you a Deriv trading bot builder with copy trading, free bots, and advanced strategies.',
    },
};

export const getSiteBrand = (): TSiteBrand => {
    if (typeof window === 'undefined') return DEFAULT_BRAND;
    const hostname = window.location.hostname.toLowerCase().replace(/^www\./, '');
    return DOMAIN_BRANDS[hostname] ?? DEFAULT_BRAND;
};

export const applySiteBranding = () => {
    if (typeof document === 'undefined') return;

    const brand = getSiteBrand();
    document.title = brand.title;

    const setMeta = (selector: string, content: string) => {
        const el = document.querySelector(selector);
        if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', brand.description);
    setMeta('meta[name="application-name"]', brand.name);
    setMeta('meta[property="og:title"]', brand.title);
    setMeta('meta[property="og:description"]', brand.description);
    setMeta('meta[property="og:site_name"]', brand.name);
    setMeta('meta[property="twitter:title"]', brand.title);
    setMeta('meta[property="twitter:description"]', brand.description);
};

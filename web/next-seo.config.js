const title = "Fenzo Serralheria";
const description = "Portões, portas, guarda corpo — Serralheria em alumínio de alto padrão.";

const SEO = {
  title,
  description,
  canonical: "https://fenzoserralheria.com.br",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://fenzoserralheria.com.br",
    title,
    description,
    images: [
      {
        url: "/banner-fenzo.png",
        alt: title,
        width: 2240,
        height: 1260,
      },
    ],
  },
  twitter: {
    handle: "@fenzoserralheria",
    site: "@fenzoserralheria",
    cardType: "summary_large_image",
  },
};

export default SEO;

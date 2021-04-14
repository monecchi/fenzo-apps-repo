const title = "Fenzo Serralheria";
const description = "Alumínio alto padrão. Portões, portas, janelas, guarda corpo, vidro temperado";
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
        url: "https://images.prismic.io/fenzo/dd039a12-9f05-4f70-976a-677b59a0dc41_fenzo-serralheria-default.png?auto=compress,format", //"/images/fenzo-serralheria-default.png",
        alt: title,
        width: 1600,
        height: 850,
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

import { ReactElement } from 'react'
import { FacebookLogo, InstagramLogo, GoogleLogo, WhatsappLogo } from 'phosphor-react'

export const socials: { name: string, description: string, link: string, icon: ReactElement; }[] = [
  { name: "Facebook", description: "Seguir no Facebook", icon: <FacebookLogo color="blue" size={36} weight="duotone" />, link: "https://www.facebook.com/fenzoserralheria" },
  { name: "Instagram", description: "Siga no Instagram", icon: <InstagramLogo color="blue" size={36} weight="duotone" />, link: "https://www.instagram.com/fenzoserralheria" },
  { name: "Google", description: "Encontre no Google", icon: <GoogleLogo color="blue" size={36} weight="bold" />, link: "https://g.page/fenzoFaz" },
];

//
// Custom loader for prismic.io images
//
export const nextPrismicLoader = ({ src, width, quality }) => {
  return `${src}&w=${width}&q=${quality || 75}`
}

/**
 * Returns correct site url based on environment, development or production
 * @returns string url, example: `http://localhost:3000` || `https://mywebsite.com`
 */
export const serverURL = () => {
  const url = process.env.NODE_ENV !== 'production' ? "http://localhost:3000" : process.env.NEXT_PUBLIC_SITE_URL;
  return `${url}`;
}

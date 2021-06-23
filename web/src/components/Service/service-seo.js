import { NextSeo, ArticleJsonLd } from 'next-seo'

const ServiceSeo = ({ title, description, publishDate, link, image, author }) => {
  const date = new Date(publishDate).toISOString();

  const ogImage = image["wide-md"]

  const featuredImage = [
    ogImage.url,
  ];

  return (
    <>
      <NextSeo
        title={`${title} – Fenzo Serralheria`}
        description={description}
        canonical={link}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          link,
          title,
          description: description,
          images: [
            {
              url: ogImage.url,
              alt: image.alt,
              width: ogImage.dimensions.width,
              height: ogImage.dimensions.height,
            },
          ],
        }}
      />
      <ArticleJsonLd
        authorName={author}
        dateModified={date}
        datePublished={date}
        description={description}
        images={featuredImage}
        publisherLogo="/android-icon-192.png"
        publisherName="Fenzo Serralheria"
        title={title}
        url={link}
      />
    </>
  );
};

export default ServiceSeo;

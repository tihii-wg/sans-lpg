import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const supportedLangs = ["ru", "ro", "en"];
const baseUrl = "https://sans.md";

const ogLocales: Record<string, string> = {
  ru: "ru_RU",
  ro: "ro_MD",
  en: "en_US",
};

export default function SEOHead() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { pathname } = useLocation();
  const currentLang = supportedLangs.includes(lang || "")
    ? (lang as string)
    : "ro";

  const pathWithoutLang = pathname.replace(/^\/(ru|ro|en)(?=\/|$)/, "");

  const canonicalURL = `${baseUrl}/${currentLang}${pathWithoutLang || "/"}`;

  const pageTitle = t(`seo.${pathWithoutLang.slice(1) || "home"}-title`);

  const pageDescription = t(
    `seo.${pathWithoutLang.slice(1) || "home"}-description`
  );

  return (
    <Helmet>
      <html lang={currentLang} />

      <title>{pageTitle}</title>

      <meta name="description" content={pageDescription} />

      <link rel="canonical" href={canonicalURL} />

      {supportedLangs.map((lng) => (
        <link
          key={lng}
          rel="alternate"
          href={`${baseUrl}/${lng}${pathWithoutLang}`}
          hrefLang={lng}
        />
      ))}

      <link
        rel="alternate"
        href={`${baseUrl}/ro${pathWithoutLang}`}
        hrefLang="x-default"
      />
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:title" content={pageTitle || "Site Name"} />
      <meta property="og:site_name" content="SANS" />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={ogLocales[currentLang]} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${baseUrl}#business`,
          name: "SANS",
          url: baseUrl,
          logo: `${baseUrl}/img/logo/sans-logo.png`,
          // image: `${baseUrl}/og-image.jpg`,
          telephone: "+37378111233",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chișinău",
            addressCountry: "MD",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 46.99128,
            longitude: 28.90919,
          },
          areaServed: "Moldova",
          sameAs: [
            "https://www.facebook.com/shans.gas",
            // "https://instagram.com/yourpage",
          ],
        })}
      </script>
    </Helmet>
  );
}

import { Helmet } from "react-helmet-async";

export const SEO = ({ title, description, image, url }) => {
  const siteName = "Sangwa Jesly — Engineer & Designer";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const siteDescription = description || "Software Engineer and Designer specializing in web development, brand design, and AI automation solutions.";
  const siteUrl = "https://sangwajesly.com"; // Replace with your actual domain
  const finalUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={siteDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={siteDescription} />
      {image && <meta property="twitter:image" content={image} />}
    </Helmet>
  );
};

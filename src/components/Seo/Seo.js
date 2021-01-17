import Helmet from "react-helmet";

const Seo = ({ lang, title, type, description }) => {
  return (
    <Helmet>
      <meta property="og:type" content={type} />
      <meta name="robots" content="index, follow" />
      <meta property="og:locale" content={lang} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <title>Orienta Jovem - {title}</title>
    </Helmet>
  );
};

export default Seo;

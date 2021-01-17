import Head from "next/head";

const Seo = ({ lang, title, type, description }) => {
  return (
    <Head>
      <meta property="og:type" content={type} />
      <meta name="robots" content="index, follow" />
      <meta property="og:locale" content={lang} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <title>Orienta Jovem - {title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&family=Roboto&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default Seo;

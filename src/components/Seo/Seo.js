import Head from "next/head";

const Seo = ({ lang, title, type, description }) => {
  return (
    <Head>
      <meta property="og:type" content={type} />
      <meta name="robots" content="index, follow" />
      <meta property="og:locale" content={lang} />
      <meta
        property="{ lang, title, type, description }og:title"
        content={title}
      />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <title>matheusdoedev - {title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Serif&family=Ubuntu:wght@500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default Seo;

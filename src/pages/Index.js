import MainLayout from "../layouts/MainLayout";

import Seo from "../components/Seo/Seo";
import Hero from "../components/Hero/Hero";
import ComoPodemosTeAjudar from "../components/ComoPodemosTeAjudar/ComoPodemosTeAjudar";

const Home = () => {
  return (
    <>
      <Seo
        title="Plataforma que conecta mentores, bolsas e vagags do mercado de trabalho com os jovens de baixa renda"
        description="Plataforma que conecta mentores, bolsas e vagags do mercado de trabalho com os jovens de baixa renda"
        type="website"
        lang="pt-br"
      />

      <MainLayout>
        <Hero />
        <ComoPodemosTeAjudar />
      </MainLayout>
    </>
  );
};

export default Home;

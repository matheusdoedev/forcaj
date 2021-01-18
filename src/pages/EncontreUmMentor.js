import mentorImg from "./../assets/mentor.jpg";

import MainLayout from "../layouts/MainLayout";

import Seo from "../components/Seo/Seo";
import SearchHead from "../components/SearchHead/SearchHead";
import SearchResults from "../components/SearchResults/SearchResults";

const EncontreUmMentor = () => {
  return (
    <>
      <Seo
        title="Orienta Jovem"
        description="Encontre um mentor"
        type="website"
        lang="pt-br"
      />

      <MainLayout>
        <SearchHead
          title="Encontre um mentor"
          options={[
            { label: "Atendimento ao cliente", href: "/" },
            { label: "Vendas", href: "/" },
            { label: "Programação", href: "/" },
            { label: "Marketing Digital", href: "/" },
            { label: "Design Gráfico", href: "/" },
            { label: "UX & UI Design", href: "/" },
          ]}
        />
        <SearchResults
          options={[
            {
              name: "Carla Lisboa",
              area: "Marketing Digital",
              src: mentorImg,
            },
            {
              name: "Carla Lisboa",
              area: "Marketing Digital",
              src: mentorImg,
            },
            {
              name: "Carla Lisboa",
              area: "Marketing Digital",
              src: mentorImg,
            },
            {
              name: "Carla Lisboa",
              area: "Marketing Digital",
              src: mentorImg,
            },
            {
              name: "Carla Lisboa",
              area: "Marketing Digital",
              src: mentorImg,
            },
            {
              name: "Carla Lisboa",
              area: "Marketing Digital",
              src: mentorImg,
            },
            {
              name: "Carla Lisboa",
              area: "Marketing Digital",
              src: mentorImg,
            },
            {
              name: "Carla Lisboa",
              area: "Marketing Digital",
              src: mentorImg,
            },
          ]}
        />
      </MainLayout>
    </>
  );
};

export default EncontreUmMentor;

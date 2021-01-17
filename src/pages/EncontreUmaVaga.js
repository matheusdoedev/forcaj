import mentorImg from "./../assets/mentor.jpg";

import MainLayout from "../layouts/MainLayout";

import SearchHead from "../components/SearchHead/SearchHead";
import SearchResults from "../components/SearchResults/SearchResults";

const EncontreUmaBolsa = () => {
  return (
    <MainLayout>
      <SearchHead
        title="Encontre uma vaga"
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
        title="Veja todas as nossas bolsas"
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
  );
};

export default EncontreUmaBolsa;

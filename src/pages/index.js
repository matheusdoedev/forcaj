import { useContext } from "react";

import { Container } from "@material-ui/core";

import MainLayout from "../layouts/MainLayout";

import Input from "../components/Input/Input";
import Seo from "../components/Seo/Seo";
import Select from "../components/Select/Select";
import Checkbox from "../components/Checkbox/Checkbox";

import Hero from "../components/Hero/Hero";

import { AuthContext } from "../contexts/auth";
import { EscolasContext } from "../contexts/escolas";
import ComoPodemosTeAjudar from "../components/ComoPodemosTeAjudar/ComoPodemosTeAjudar";
import NossosParceiros from "../components/NossosParceiros/NossosParceiros";

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
        <NossosParceiros />
      </MainLayout>
    </>
  );
};

export default Home;

import { NextPage } from "next";
import Head from "next/head";
import Curso from "../components/cards/Curso";
import { SectionMargin } from "../components/sections/SectionMargin";
import SubpageTitle from "../components/sections/SubpageTitle";

const Cursos: NextPage = () => {
  return (
    <>
    <Head>
    <title>Cursos - English for Works</title>
    </Head>
      <SubpageTitle
        title={"Nossos cursos"}
        text={
          "Uma lista que é atualizada diariamente com dezenas de cursos para  ajudar você na fase que está agora"
        }
        customClass={"ny-background"}
      />

      <SectionMargin customClass="grid sm:grid-cols-2 lg:grid-cols-4 justify-center gap-15">
        <Curso
          text={"Diversos podcasts, vídeos, apostilas para o seu ingês evoluir"}
        />
        <Curso
          text={"Diversos podcasts, vídeos, apostilas para o seu ingês evoluir"}
        />
        <Curso
          text={"Diversos podcasts, vídeos, apostilas para o seu ingês evoluir"}
        />
        <Curso
          text={"Diversos podcasts, vídeos, apostilas para o seu ingês evoluir"}
        />
        <Curso
          text={"Diversos podcasts, vídeos, apostilas para o seu ingês evoluir"}
        />
        <Curso
          text={"Diversos podcasts, vídeos, apostilas para o seu ingês evoluir"}
        />
        <Curso
          text={"Diversos podcasts, vídeos, apostilas para o seu ingês evoluir"}
        />
        <Curso
          text={"Diversos podcasts, vídeos, apostilas para o seu ingês evoluir"}
        />
      </SectionMargin>
    </>
  );
};

export default Cursos;

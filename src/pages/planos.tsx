import { NextPage } from "next";
import PlanoDescricao from "../components/PlanoDescricao";
import { SectionMargin } from "../components/sections/SectionMargin";
import SubpageTitle from "../components/sections/SubpageTitle";

import { SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { IoMdBarcode } from "react-icons/io";
import { RiPixelfedFill } from "react-icons/ri";
import Head from "next/head";

const Planos: NextPage = () => {
  return (
    <>
      <Head>
        <title>Planos - English for Works</title>
      </Head>
      <SubpageTitle
        title={"Nossos planos"}
        text={
          "Nós temos um conjunto de planos pensado para você e o que mais se adequa ao seu perfíl"
        }
        customClass={"british-background"}
      />
      <SectionMargin customClass="flex flex-col gap-32 items-center">
        <PlanoDescricao
          title={"Plano gratuito"}
          text={
            "Aqui será um texto mais elaborado elaborando os benefícios do plano básico e o público ideal para ideal descrevendo os benefícios e as vantagens para cada tipo de público"
          }
          starNumbers={1}
          titleIsRed={false}
        />
        <PlanoDescricao
          title={"Plano regular"}
          text={
            "Aqui será um texto mais elaborado elaborando os benefícios do plano básico e o público ideal para ideal descrevendo os benefícios e as vantagens para cada tipo de público"
          }
          starNumbers={2}
          titleIsRed={false}
        />
        <PlanoDescricao
          title={"Plano premium"}
          text={
            "Aqui será um texto mais elaborado elaborando os benefícios do plano básico e o público ideal para ideal descrevendo os benefícios e as vantagens para cada tipo de público"
          }
          starNumbers={3}
          titleIsRed={true}
        />
        <div className="text-black">
          <p>Aceitamos todos os cartões, boleto e PIX</p>
          <div className="flex gap-8 flex-wrap justify-center items-center text-red">
            <SiVisa size={40} />
            <FaCcMastercard size={30} />
            <IoMdBarcode size={25} />
            <RiPixelfedFill size={30} />
          </div>
        </div>
      </SectionMargin>
    </>
  );
};

export default Planos;

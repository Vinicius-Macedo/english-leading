import Beneficios from "../components/cards/Beneficios";

import { FaBookOpen, FaHome } from "react-icons/fa";
import { GiTeacher, GiTalk } from "react-icons/gi";

import Image from "next/image";

import type { NextPage } from "next";
import { SectionMargin } from "../components/sections/SectionMargin";
import { ImageWithText } from "../components/sections/ImageWithText";
import Link from "next/link";
import Curso from "../components/cards/Curso";
import PlanoCard from "../components/cards/PlanoCard";
import Head from "next/head";
import { TestimonialCard } from "../components/cards/TestimonialCard";
import { FaqItem } from "../components/Faqitem";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>English For Works</title>
      </Head>
      <SectionMargin customClass="flex flex-wrap justify-center lg:justify-start relative">
        <figure className="w-full max-w-[526px] h-auto relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 -z-[1]">
          <Image
            src="./hero-vector.svg"
            alt="Vetor de estudo a distância"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          ></Image>
        </figure>

        <div className="flex flex-col gap-8 lg:gap-24 items-center lg:items-start">
          <h1 className="text-s36 text-black font-bold font-poppins max-w-[685px] tclgtl">
            Frase de efeito descrevendo o curso e falando sobre ele em duas
            linhas
          </h1>
          <p className="text-s22 text-black max-w-[430px] tclgtl">
            Conheça profundamente a bolsa de valores e evolua seus
            investimentos!
          </p>
          <Link href={"/planos/"}>
            <a className="bg-blue hover:bg-darkblue active:bg-blue px-16 py-6 text-white font-bold">
              Quero minha matricula
            </a>
          </Link>
        </div>
      </SectionMargin>
      <SectionMargin customClass="grid sm:grid-cols-2 lg:grid-cols-4 justify-center gap-15">
        <Beneficios
          iconPlace={<FaBookOpen size={"49"} />}
          text={"Diversos podcasts, vídeos, apostilas para o seu ingês evoluir"}
        />
        <Beneficios
          iconPlace={<FaHome size={"49"} />}
          text={
            "Ensino home office, para você aprender em qualquer ocasião do seu dia"
          }
        />
        <Beneficios
          iconPlace={<GiTeacher size={"49"} />}
          text={
            "Professores qualificados com vivência em diversos países do globo"
          }
        />
        <Beneficios
          iconPlace={<GiTalk size={"49"} />}
          text={
            "Metódos de ensino focados na conversação e prática do inglês diariamente"
          }
        />
      </SectionMargin>
      <ImageWithText
        figureAdress={"/section-image-2.png"}
        title={"Por que nos escolher"}
        textPlace={
          <>
            <p className="text-s22 tclgtl">
              A{" "}
              <span className="font-bold text-blue max-w-[540px]">
                English For Works
              </span>{" "}
              é uma escola que já transformou a vida de mais de
              <span className="font-bold"> 20.000 </span> alunos em todo Brasil.
            </p>
            <p className="text-s22 tclgtl max-w-[540px]">
              São alunos que passam em primeiro nas entrevistas, entendem seu
              vídeo game favorito, sentem o verdadeiro sentimento que aquela
              música quer passar.
            </p>
          </>
        }
        ArticleReactNode={
          <Link href={"/cadastro/"}>
            <a className="button-red">Criar minha conta</a>
          </Link>
        }
        rowClockwise={true}
        figureAlt={"Estudante americana segurando livro"}
      />
      <SectionMargin customClass="flex flex-col items-center gap-32">
        <h1 className="text-s36">
          Nossos <span className="text-blue">cursos</span>
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-center gap-15">
          <Curso
            text={
              "Diversos podcasts, vídeos, apostilas para o seu ingês evoluir"
            }
          />
          <Curso
            text={
              "Diversos podcasts, vídeos, apostilas para o seu ingês evoluir"
            }
          />
          <Curso
            text={
              "Diversos podcasts, vídeos, apostilas para o seu ingês evoluir"
            }
          />
          <Curso
            text={
              "Diversos podcasts, vídeos, apostilas para o seu ingês evoluir"
            }
          />
        </div>
        <Link href={"/cursos/"}>
          <a className="button-red">Acessar páginas com todos os cursos</a>
        </Link>
      </SectionMargin>
      <ImageWithText
        figureAdress={"/section-image.png"}
        title={"Cursos gratuitos e exclusivos"}
        textPlace={
          <>
            <p className="text-s22 tclgtl">
              Descubra em nossa lista diversos cusos gratuitos para as mais
              diversas áreas, domine tudo aquilo que precisa para ingressar na
              área que você quer.
            </p>
            <p className="text-s22 tclgtl max-w-[540px]">
              Nos siga em nossas redes sociais e acompanhe diariamente dicas
              para melhorar o seu ingês.
            </p>
          </>
        }
        ArticleReactNode={
          <Link href={"/cadastro/"}>
            <a className="button-red">Conhecer nossos cursos</a>
          </Link>
        }
        rowClockwise={false}
        figureAlt={""}
      />
      <SectionMargin customClass="flex flex-wrap justify-center gap-32">
        <PlanoCard
          isRedTheme={false}
          beneficios={[
            <p key={0} className="text-s18">
              Acesso aos cursos gratuitos
            </p>,
            <p key={1} className="text-s18">
              Conta gratuita no nosso portal
            </p>,
          ]}
          planName={"Plano free"}
          planValue={"0,00"}
        />
        <PlanoCard
          isRedTheme={false}
          beneficios={[
            <p key={2} className="text-s18">
              Acessoa ao conteúdo gratuito e{" "}
              <span className="text-red font-bold">exclusivo</span>
            </p>,
            <p key={3} className="text-s18">
              Conta gratuita e acesso{" "}
              <span className="text-red font-bold">premium</span> no nosso
              portal
            </p>,
            <p key={4} className="text-s18">
              Acompanhamento e mentoria{" "}
              <span className="font-bold">profissional</span>
            </p>,
          ]}
          planName={"Plano regular - mensal"}
          planValue={"100,00"}
        />
        <PlanoCard
          isRedTheme={true}
          beneficios={[
            <p key={5} className="text-s18">
              Acessoa ao conteúdo gratuito e{" "}
              <span className="font-bold">exclusivo</span>
            </p>,
            <p key={6} className="text-s18">
              Conta gratuita e acesso <span className="font-bold">premium</span>{" "}
              no nosso portal
            </p>,
            <p key={7} className="text-s18">
              Acompanhamento e mentoria{" "}
              <span className="font-bold">profissional</span>
            </p>,
            <p key={8} className="text-s18">
              Imersão em inglês, tendo conversação com nativos e chance de
              intercâmbio
            </p>,
          ]}
          planName={"Plano premium - mensal"}
          planValue={"180,00"}
        />
      </SectionMargin>
      <SectionMargin customClass="flex flex-col items-center gap-32">
        <div className="">
          <h2 className="text-center text-black text-s36">
            Caminhamos juntos com eles
          </h2>
          <p className="text-center text-black text-s22 max-w-[730px]">
            Esses são alunos formados que tivemos o orgulho de receber em nossa
            escola e aplicar nosso método de ensino
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-start gap-15">
          <TestimonialCard
            icon={"/testimonial-card.png"}
            title={"Nome da pessoa"}
            text={
              "“Aqui uma descrição com foto de um de seus alunos com uma descrição de 3 linhas se encaxaria bem”"
            }
          />
          <TestimonialCard
            icon={"/testimonial-card.png"}
            title={"Nome da pessoa"}
            text={
              "“Aqui uma descrição com foto de um de seus alunos com uma descrição de 3 linhas se encaxaria bem”"
            }
          />
          <TestimonialCard
            icon={"/testimonial-card.png"}
            title={"Nome da pessoa"}
            text={
              "“Aqui uma descrição com foto de um de seus alunos com uma descrição de 3 linhas se encaxaria bem”"
            }
          />
        </div>
        <Link href={"/cursos/"}>
          <a className="button-red">conhecer cursos</a>
        </Link>
      </SectionMargin>
      <SectionMargin customClass="flex flex-col gap-32">
        <h2 className="text-s36 text-center">
          Principais dúvidas <span className="text-red">aprender</span>
        </h2>
        <FaqItem
          question={[
            {
              title: "Aqui vai ser o título da pergunta?",
              text: "Aqui será uma descrição explicando a resposta para a pergunta e a aqui será uma descrição  explicando a resposta para a pergunta",
            },
            {
              title: "Aqui vai ser o título da pergunta?",
              text: "Aqui será uma descrição explicando a resposta para a pergunta e a aqui será uma descrição  explicando a resposta para a pergunta",
            },
            {
              title: "Aqui vai ser o título da pergunta?",
              text: "Aqui será uma descrição explicando a resposta para a pergunta e a aqui será uma descrição  explicando a resposta para a pergunta",
            },
            {
              title: "Aqui vai ser o título da pergunta?",
              text: "Aqui será uma descrição explicando a resposta para a pergunta e a aqui será uma descrição  explicando a resposta para a pergunta",
            },
          ]}
        />
        <p className="text-center text-[#747474] mt-8">
          Não achou o que precisa? Nos envie uma mensagem ou fale conosco!
        </p>
      </SectionMargin>
    </>
  );
};

export default Home;

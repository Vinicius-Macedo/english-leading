import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

type CursoProps = {
  text: string;
};

export default function Curso(props: CursoProps) {
  return (
    <div className="bg-white text-black flex flex-col items-center w-full max-w-[255px] py-16 justify-self-center">
      <FaBookOpen className="mb-8" size={"49"} color="#c51e3a" />
      <article className="flex items-center flex-col">
        <p className="font-bold">Nome do curso</p>
        <p className="text-center px-8">{props.text}</p>
      </article>
      <div>
        
      </div>
      <Link href={"/pagina-do-curso/"}>
        <a className="text-red font-semibold relative svg-effect">
          Acessar
          <HiOutlineArrowRight />
        </a>
      </Link>
    </div>
  );
}

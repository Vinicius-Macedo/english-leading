import Link from "next/link";
import { AiTwotoneStar } from "react-icons/ai";

type PlanoDescricaoProps = {
  title: string;
  text: string;
  starNumbers: number;
  titleIsRed: boolean;
};

export default function PlanoDescricao(props: PlanoDescricaoProps) {
  return (
    <div className="w-full max-w-[920px] flex flex-col items-center gap-12">
      <div className="flex justify-center items-center flex-col">
        <div className="flex">
          {(() => {
            const arr = [];
            for (let i = 0; i < props.starNumbers; i++) {
              arr.push(<AiTwotoneStar size={30} color={"#c51e3a"} />);
            }
            return arr;
          })()}
        </div>
        <h3
          className={
            "text-s36 text-center" + (props.titleIsRed ? " text-red" : "")
          }
        >
          {props.title}
        </h3>
      </div>
      <p className="text-s22 text-center">{props.text}</p>
      <Link href={"/planos/"}>
        <a className="button-red">assinar</a>
      </Link>
    </div>
  );
}

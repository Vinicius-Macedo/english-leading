import Link from "next/link";
import { ReactNode } from "react";
import { BsCheck2 } from "react-icons/bs";

type PlanoCardProps = {
  isRedTheme: boolean;
  beneficios: JSX.Element[];
  planName: string;
  planValue: string;
};

export default function PlanoCard(props: PlanoCardProps) {
  return (
    <>
      <div
        className={
          "w-full max-w-[326px] flex flex-col items-center  p-16 gap-16" +
          (props.isRedTheme ? " bg-red text-white" : " bg-white text-black")
        }
      >
        <div className="flex flex-col items-center">
          <p className={"text-center font-medium" + (props.isRedTheme ? " text-white" : " text-red")}>{props.planName}</p>
          <div className="flex items-start gap-1">
            <p className="font-bold pt-4 font-poppins">R$</p>
            <p className="text-s36">{props.planValue}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-start w-full h-[267px]">
          {props.beneficios.map((item, i) => (
            <div key={0 + i} className="flex items-start gap-2">
              <div className="pt-2">
                <BsCheck2 size={20} />
              </div>
              {item}
            </div>
          ))}
        </div>
        <Link href={"/planos/"}>
          <a className={props.isRedTheme ? "button-white" : "button-red"}>
            saiba mais
          </a>
        </Link>
      </div>
    </>
  );
}

import { ReactNode } from "react";

type BeneficiosProps = {
  iconPlace: ReactNode;
  text: string;
};

export default function Beneficios(props: BeneficiosProps) {
  return (
    <div className="bg-red text-white flex flex-col items-center w-full max-w-[255px] gap-8 py-16 justify-self-center">
      {props.iconPlace}
      <p className="text-center font-bold px-8">{props.text}</p>
    </div>
  );
}

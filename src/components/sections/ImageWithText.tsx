import { ReactNode } from "react";
import { SectionMargin } from "./SectionMargin";
import Image from "next/image";

type ImageWithTextProps = {
  figureAdress: string;
  figureAlt: string;
  id?: string;
  title: string;
  textPlace: ReactNode;
  ArticleReactNode?: ReactNode;
  rowClockwise: boolean;
};

export function ImageWithText(props: ImageWithTextProps) {
  let rowDirection = props.rowClockwise ? "lg:flex-row" : "lg:flex-row-reverse";

  return (
    <SectionMargin
      id={props.id}
      customClass={`flex flex-col items-center gap-8 ${rowDirection} lg:gap-32 lg:justify-between`}
    >
      <figure className="relative rounded h-[100vw] sm:h-[445px] w-full sm:w-[445px] bg-red">
        <Image
          className="rounded"
          layout="fill"
          src={props.figureAdress}
          alt={props.figureAlt}
          objectFit="cover"
        ></Image>
      </figure>
      <article className="flex flex-col items-center lg:items-start  gap-16 max-w-[540px]">
        <h1 className="text-black text-s36 line-after tclgtl">{props.title}</h1>
        {props.textPlace}
        {props.ArticleReactNode}
      </article>
    </SectionMargin>
  );
}

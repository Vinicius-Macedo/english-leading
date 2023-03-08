import { ReactNode } from "react";

type SectionMarginProps = {
  id?: string;
  customClass?: string;
  children: ReactNode;
};

export function SectionMargin(props: SectionMarginProps) {
  return (
    <section
      id={props.id}
      className={
        "py-16 sm:py-32 lg:py-64 px-16 lg:px-24 xl:px-0 max-w-[1110px] m-auto" +
        (props.customClass ? " " + props.customClass : "")
      }
    >
      {props.children}
    </section>
  );
}

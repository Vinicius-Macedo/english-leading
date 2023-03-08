import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

type Question = {
  title: string;
  text: string;
};

type FaqItemProps = {
  question: Question[];
};

export function FaqItem(props: FaqItemProps) {
  const [open, setOpen] = useState(false);
  const [dropDownIdOpen, setDropDownIdOpen] = useState<number | null>(null);

  function handleOpenDropDown(i: number) {
    if (!open && dropDownIdOpen === null) {
      setOpen(true);
      setDropDownIdOpen(i);
    } else if (open && dropDownIdOpen != i) {
      setDropDownIdOpen(i);
    } else {
      setOpen(false);
      setDropDownIdOpen(null);
    }
  }

  return (
    <ul>
      {props.question.map((item, i) => (
        <li
          key={i}
          className={
            "faq-container" + (open && i === dropDownIdOpen ? " open" : "")
          }
        >
          <div
            onClick={() => handleOpenDropDown(i)}
            className={"pergunta-container"}
          >
            <p className="text-black text-s22 font-medium">{item.title}</p>
            <figure className="dropdown-icon">
              <RiArrowDropDownLine color="#1a1919" size={"60px"} />
            </figure>
          </div>
          {item.text.split("\n").map((item, i) => (
            <p className="resposta" key={i}>
              {item}
            </p>
          ))}
        </li>
      ))}
    </ul>
  );
}

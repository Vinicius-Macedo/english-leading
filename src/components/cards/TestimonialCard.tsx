import Image from "next/image";

type TestimonialCardProps = {
  icon: string;
  title: string;
  text: string;
};

export function TestimonialCard(props: TestimonialCardProps) {
  return (
    <div className="mt-30 bg-white rounded flex flex-col gap-8 justify-center items-center px-16 py-32 pb-16 max-w-[350px] w-full relative">
      <figure className="w-[120px] h-[120px]  object-cover object-center absolute left-1/2 -translate-x-1/2 -top-30 ">
        <Image
          className="rounded-full border-2 border-[#ffffff] border-solid"
          layout="fill"
          src={props.icon}
          alt="Foto do perfil"
        ></Image>
      </figure>
      <p className="max-w-[180px] text-s18 text-center font-bold text-black">
        {props.title}
      </p>
      <p className="w-full h-[108px] text-center text-gray text-[18px]">
        {props.text}
      </p>
    </div>
  );
}

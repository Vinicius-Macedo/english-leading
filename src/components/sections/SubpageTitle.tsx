type SubpageTitleProps = {
  title: string;
  text: string;
  customClass: string;
};

export default function SubpageTitle(props: SubpageTitleProps) {
  return (
    <div className={"w-full h-[256px] flex justify-center items-center " + props.customClass }>
      <article className="w-full max-w-[555px]">
        <h1 className="text-s36 font-bold text-center text-white">
          {props.title}
        </h1>
        <p className="text-s22 text-center text-white">
          {props.text}
        </p>
      </article>
    </div>
  );
}

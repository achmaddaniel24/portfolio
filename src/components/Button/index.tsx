export default function Button(props: any) {
  return (
    <div
      className={`rounded-xl mr-2 hover:drop-shadow ${
        props.color ?? "bg-sky-500 md:bg-gray-300 hover:bg-sky-500 duration-300"
      }`}>
      <p
        className={`px-6 py-3 font-poppins font-medium text-center hover:drop-shadow ${
          props.color
            ? "text-white"
            : "text-white md:text-neutral-700 hover:text-white duration-300"
        }`}>
        <a href={props.url ?? ""}>{props.text ?? ""}</a>
      </p>
    </div>
  );
}

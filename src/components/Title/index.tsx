export default function Title({ text }: { text: string }) {
  return (
    <h1 className="text-2xl font-poppins font-semibold md:text-3xl pt-16">
      {text}
    </h1>
  );
}

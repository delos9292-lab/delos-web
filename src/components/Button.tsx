type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-[#2E2E2E] px-10 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-black"
    >
      {text}
    </button>
  );
}
type Props = {
  title: string;
  type?: "link";
  href?: string;
  handler: () => void;
};

export default function Button({ title, handler, type, href }: Props) {
  if (type === "link")
    return (
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={href}
        className="px-6 py-3 rounded-full bg-[#1a73e8] text-white font-medium shadow-sm hover:opacity-95 transition cursor-pointer tracking-wider"
      >
        {title}
      </a>
    );

  return (
    <button
      onClick={handler}
      className="px-6 py-3 rounded-full bg-[#1a73e8] text-white font-medium shadow-sm hover:opacity-95 transition cursor-pointer tracking-wider"
    >
      {title}
    </button>
  );
}

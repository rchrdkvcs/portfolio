import Link from "next/link";

export const SecondaryButton = ({ href, label, icon, children }) => {
  return (
    <Link
      {...children}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-fit py-2 px-4 transition-all ease-in-out gap-2 bg-bg-2 hover:bg-bg-4 text-fg-2">
      {icon}
      <p>{label}</p>
    </Link>
  );
};

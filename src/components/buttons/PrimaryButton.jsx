import Link from "next/link";

export const PrimaryButton = ({ href, label, icon, children }) => {
  return (
    <Link
      {...children}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-fit py-2 px-4 transition-all ease-in-out gap-2 bg-fg-1 hover:bg-bg-3 text-bg-1">
      {icon}
      <p>{label}</p>
    </Link>
  );
};

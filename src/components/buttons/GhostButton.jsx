import Link from "next/link";

export const GhostButton = ({ href, label, icon, children }) => {
  return (
    <Link
      {...children}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-fit transition-all ease-in-out gap-2 text-fg-1 text-opacity-75 hover:text-fg-2 hover:text-opacity-100">
      {icon}
      <p>{label}</p>
    </Link>
  );
};

import Link from "next/link";

export const ContactButton = ({ href, label, icon, children }) => {
  return (
    <Link
      {...children}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center hover:dark:white-preset hover:dark-preset border border-[#111] dark:border-[#aaa] w-fit p-1 transition ease-in-out duration-100 gap-2 border-b-4">
      {icon}
      <p>{label}</p>
    </Link>
  );
};

import Link from "next/link";

interface ButtonProps {
  href: string;
  children: string;
  className?: string;
}

export default function Button({ href, children, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`bg-blue-500 inline-flex items-center text-white h-10 px-4 rounded-md hover:bg-blue-400 ${className}`}
    >
      {children}
    </Link>
  );
}

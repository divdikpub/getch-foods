import Link from "next/link";
import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  href?: string;
  children: string;
  className?: string;
}

export default function Button({
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const newClassName = `bg-blue-500 inline-flex items-center text-white h-10 px-4 rounded-md hover:bg-blue-400 ${className}`;

  if (href) {
    return (
      <Link href={href} className={newClassName} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={newClassName} {...props}>
        {children}
      </button>
    );
  }
}

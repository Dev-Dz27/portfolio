"use client";
import { capitalize, cn } from "@/lib/utils";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type NavigationProps = {
  fixed?: boolean;
};
export const Navigation: React.FC<NavigationProps> = ({ fixed = true }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const navigation = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  const fixedClasses = cn(
    "fixed inset-x-0 top-0 z-50 border-b backdrop-blur",
    isIntersecting
      ? "border-transparent bg-zinc-900/0"
      : "bg-zinc-900/500  border-zinc-800 "
  );

  return (
    <header ref={ref}>
      <div className={cn(fixed ? fixedClasses : "")}>
        <div className="container mx-auto flex flex-row-reverse items-center justify-between p-6 text-sm sm:text-base">
          <div className="group flex justify-between gap-4 text-zinc-200 md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                aria-label={`Go to ${item.name} page`}
                href={`${item.href}`}
                className="duration-200 hover:!text-zinc-200 group-hover:text-zinc-400"
                >
                {capitalize(item.name)}
              </Link>
			  
            ))}
          </div>

          {/* <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link> */}
          <Link
            aria-label="Go to home page"
            href="/"
            className="text-zinc-200 duration-200 hover:text-zinc-100"
          >
            <Home className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};

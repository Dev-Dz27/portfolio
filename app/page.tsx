import Link from "next/link";
import React from "react";
import  {ParticlesWrapper}  from "@/components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Templates", href: "/templates" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-500 duration-500 hover:text-zinc-300 md:text-base"
              >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="animate-glow hidden h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <div className="absolute inset-0 -z-10 animate-fade-in">
       <ParticlesWrapper />
       </div>
       <h1 className="duration-1500 z-10 animate-title cursor-default whitespace-nowrap bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 bg-clip-text font-display text-6xl text-transparent md:text-[140px]">
        {/* {page.title} */}
CraftedX
      </h1>

      <div className="animate-glow hidden h-px w-screen animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <div className="mx-4 my-16 animate-fade-in text-center">
        <h2 className="text-sm text-zinc-500 ">
		Hello, I'm Youcef Seif El Islam, I'm currently a student at {" "}
          <Link
            target="_blank"
            href="https://www.univ-mosta.dz/"
            className="underline duration-500 hover:text-zinc-300"
          >
             Mostaganem University
          </Link>
          <br />
		  while exploring {" "}
          <Link
            target="_blank"
            href="https://nextjs.org/blog/next-13"
            className="underline duration-500 hover:text-zinc-300"
          >
            Next.js 
          </Link>{" "}
		  at night.
        </h2>
      </div>
    </main>
  );
}

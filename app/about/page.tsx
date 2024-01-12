"use client";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/nav";
import StacksCard from "@/components/stacks-card";

const inspiration = [
  {
    name: "basement.studio",
    href: "https://basement.studio/",
  },
  {
    name: "ped.ro",
    href: "https://ped.ro/",
  },
  {
    name: "bentogrids",
    href: "https://bentogrids.com/",
  },
  {
    name: "ui.aceternity.com",
    href: "https://ui.aceternity.com/",
  },
  {
    name: "leerob.io",
    href: "https://leerob.io/",
  },
  {
    name: "zenorocha.com",
    href: "https://zenorocha.com/",
  },

  {
    name: "anishde.dev",
    href: "https://anishde.dev/",
  },
  {
    name: "samuelkraft.com",
    href: "https://samuelkraft.com/",
  },
  {
    name: "nikolovlazar.com",
    href: "https://nikolovlazar.com/",
  },
  {
    name: "blog.maximeheckel.com",
    href: "https://blog.maximeheckel.com/",
  },
  {
    name: "joshwcomeau.com",
    href: "https://www.joshwcomeau.com/",
  },
  // {
  //   name: "chronark.com",
  //   href: "https://www.chronark.com/",
  // },
  {
    name: "hover.dev",
    href: "https://www.hover.dev/",
  },
  {
    name: "jahir.dev",
    href: "https://jahir.dev/",
  },
  {
    name: "theodorusclarence.com",
    href: "https://theodorusclarence.com/",
  },
  {
    name: "nextra",
    href: "https://nextra.site/",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="relative min-h-screen bg-gradient-to-tl from-zinc-800 via-zinc-400/10 to-zinc-900 pb-16 pt-6 md:pt-1">
        <Navigation />
        <div className="mx-auto max-w-7xl space-y-8 px-6 pt-16 md:space-y-16 md:pt-24 lg:px-8 lg:pt-32 ">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <div className="mx-auto max-w-2xl lg:mx-0">
                <p className="mt-4 pb-8  font-foldit text-8xl tracking-tight text-zinc-100 ">
                  About Me
                </p>
                {/* <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                  Youcef Seif El Islam
                </h2> */}
              </div>
              <div className="prose prose-invert py-8 text-white  ">
                {/* <PortableText value={description} components={ptComponents} /> */}
                <p>
                  I am particularly interested in collaborating with early-stage
                  startups and founders, providing my expertise to help define
                  their unique online presence.
                </p>
                <p>
                  Recently discovering a newfound passion for writing, I've
                  begun my journey in sharing insights on technology,
                  development, and productivity. You can find some of my
                  published articles on Medium where I delve into these topics.
                  Check them out on{" "}
                  <Link target="_blank" href="https://medium.com/@CraftedX">
                    Medium
                  </Link>
                  .
                </p>
              </div>
            </div>
            <StacksCard />
          </div>
          <div className="mx-auto lg:mx-0">
            <h1 className="font-foldit text-8xl tracking-tight text-zinc-100">
              Inspiration
            </h1>
            <p className="mt-4 text-zinc-400">
              Here are some websites that inspired me a lot to build a fantastic
              website.
            </p>
          </div>
          <ul className="list-disc list-inside prose prose-invert ">
            {inspiration.map((i) => (
              <li>
                <Link href={i.href} target="_blank">
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mx-auto">
            <Image
              className="duration-600 ease-in-out mx-auto "
              src="/my-signature.svg"
              width={300}
              height={200}
              alt="my signature"
            />
          </div>
        </div>
      </main>
    </>
  );
}

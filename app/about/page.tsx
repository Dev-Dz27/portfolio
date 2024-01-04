"use client";
import { Github, Mail, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/nav";
import { Card } from "@/components/card";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/cysi/",
    label: "Linkedin",
    handle: "@Chekkal_Youcef",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:chekkalislam@gmail.com",
    label: "Email",
    handle: "chekkalislam@gmail.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/Dev-Dz27",
    label: "Github",
    handle: "CraftedX",
  },
];

export default function Example() {
  return (
    <>
      <main className="relative min-h-screen bg-gradient-to-tl from-zinc-800 via-zinc-400/10 to-zinc-900 pb-16 pt-6 md:pt-1">
        <Navigation />
        <div className="mx-auto max-w-7xl space-y-8 px-6 pt-16 md:space-y-16 md:pt-24 lg:px-8 lg:pt-32 ">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <div className="mx-auto max-w-2xl lg:mx-0">
                <p className="mt-4 pb-8  font-foldit text-8xl tracking-tight text-zinc-100 ">
                  My Story
                </p>
                {/* <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                  Youcef Seif El Islam
                </h2> */}
              </div>
              <div className="prose prose-invert py-8 text-white  ">
                {/* <PortableText value={description} components={ptComponents} /> */}
                <p>
                  Writing is a passion of mine that i recently discovered,
                  although I'm just getting started. I have contributed a few
                  public articles on topics related to technology, development,
                  and productivity. Check them out on{" "}
                  <Link target="_blank" href="https://medium.com/@CraftedX">
                    Medium
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <Image
              className="duration-600 ease-in-out  "
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

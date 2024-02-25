import { Navigation } from "@/components/nav";
import { Skeleton } from "@/components/skeleton";
import { ArrowLeft, Eye, Github, Linkedin } from "lucide-react";

export default function Loading() {
  return (
    <div className="bg-zinc-50 min-h-screen animate-pulse">
    <header className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black  ">
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent    `}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <span
              title="View counter for this page"
              className={`duration-200 hover:font-medium flex items-center gap-1 `}
            >
              <Eye className="w-5 h-5" />{" "}
            </span>
            <p>
              <Linkedin
                className={`w-6 h-6 duration-200 hover:font-medium  `}
              />
            </p>
            <p>
              <Github className={`w-6 h-6 duration-200 hover:font-medium `} />
            </p>
          </div>

          <a className={`duration-200 hover:font-medium  `}>
            <ArrowLeft className="w-6 h-6 " />
          </a>
        </div>
      </div>
      <div 
      className=" mx-auto relative isolate overflow-hidden  py-24 sm:py-32 "
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mx-auto max-w-2xl lg:mx-0 space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display  w-[550px]  h-8 rounded-full bg-slate-200"></h1>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px] mb-2.5 mx-auto"></div>
    <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[440px]"></div>
    <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[140px]"></div>
            <p className="mt-6 text-lg leading-8 text-zinc-300"></p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none sm:">
            <div className=" gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {[...new Array(1)].map((link) => (
                <a  className="inline-flex mx-auto space-x-4" key="#" href="#">
                  <div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mt-2.5 " />
                  <span  aria-hidden="true" >&rarr; </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
  );
}

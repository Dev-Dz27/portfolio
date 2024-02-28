// import { Navigation } from "@/components/nav";
import { Skeleton } from "@/components/skeleton";
import { Eye } from "lucide-react";

export default function Loading() {
  return (
    <div className="relative pb-16">
      {/* <Navigation /> */}
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <div className="mt-4 pb-8 animate-pulse font-foldit text-8xl tracking-tight text-zinc-100 w-80 h-12 bg-gray-200 rounded-full">
            {/* Skeleton for large heading */}
          </div>
          <div className="flex items-center w-full mt-4">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {[...new Array(4)].map((s, index) => (
            <div>
              <a href="#" />
              <article className="relative h-full w-full p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center mb-4">
                  <Skeleton className="text-xs text-zinc-100 h-4 w-[180px]" />
                  <span className="text-zinc-500 text-xs  flex items-center gap-1 ">
                    
        <Skeleton className="h-4 w-[100px] " />
                    <Eye className="w-4 h-4" />{" "}
                  </span>
                </div>

                <div className="relative mb-3 min-h-[250px] sm:min-h-[350px] md:mb-5">
                  <div className="flex flex-col space-y-3">
                    <Skeleton className="min-h-[250px] sm:min-h-[350px] rounded-xl" />
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Navigation } from "@/components/nav";

export default function AboutPage() {
  return (
    <>
      <main className="relative min-h-screen bg-gradient-to-tl from-zinc-800 via-zinc-400/10 to-zinc-900 pb-16 pt-6 md:pt-1">
        <Navigation />
        <div className="mx-auto max-w-7xl space-y-8 px-6 pt-16 md:space-y-16 md:pt-24 lg:px-8 lg:pt-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <div className="mx-auto max-w-2xl lg:mx-0">
                <div className="mt-4 pb-8 animate-pulse font-foldit text-8xl tracking-tight text-zinc-100 w-80 h-12 bg-gray-200 rounded-full">
                  {/* Skeleton for large heading */}
                </div>
                {/* Removed comment about h2 */}
              </div>
              <div className="prose prose-invert py-8 text-zinc-400">
                <div className="w-full h-32 bg-gray-200 rounded animate-pulse"></div>
                {/* Skeleton for description */}
                <div className="mt-4 h-16 bg-gray-200 rounded animate-pulse"></div>
                {/* Skeleton for first paragraph */}
                <div className="mt-4 h-16 bg-gray-200 rounded animate-pulse"></div>
                {/* Skeleton for second paragraph */}
                <div className="mt-4 flex items-center">
                  <div className="mr-4 w-16 h-16 bg-gray-200 rounded animate-pulse"></div>
                  {/* Skeleton for Medium link */}
                  <div className="w-48 h-12 bg-gray-200 rounded animate-pulse"></div>
                  {/* Skeleton for "Check them out on" text */}
                </div>
              </div>
            </div>
            <div className="lg:hidden">
              <div className="animate-pulse w-full h-48 bg-gray-200 rounded"></div>
              {/* Skeleton for StacksCard */}
            </div>
          </div>
          <div className="mx-auto lg:mx-0 max-w-2xl">
            <h1 className="max-w-2xl lg:mx-0 text-zinc-100 mt-4 pb-8 animate-pulse font-foldit text-8xl tracking-tight w-80 h-12 bg-gray-200 rounded-full">
              {/* Skeleton for "Inspiration" heading */}
            </h1>
            <p className="mt-4 text-zinc-400">
              Here are some websites that inspired me a lot to build this website.
            </p>
          </div>
          <ul className="list-disc list-inside prose prose-invert">
            {[...new Array(6)].map((i) => (
              <li key={i}>
                <Link href='' target="_blank">
                 
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-auto animate-pulse w-32 h-24 bg-gray-200 rounded"></div>
          {/* Skeleton for signature image */}
        </div>
      </main>
    </>
  );
}

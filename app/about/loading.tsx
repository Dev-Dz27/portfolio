import { Navigation } from "@/components/nav";

export default function Loading() {
  return (
    <>
      <main className="relative min-h-screen bg-gradient-to-tl from-zinc-800 via-zinc-400/10 to-zinc-900 pb-16 pt-6 md:pt-1">
        <Navigation />
        <div className=" animate-pulse mx-auto max-w-7xl space-y-8 px-6 pt-16 md:space-y-16 md:pt-24 lg:px-8 lg:pt-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <div className="mx-auto max-w-2xl lg:mx-0">
                <div className="mt-4 pb-8 animate-pulse font-foldit text-8xl tracking-tight text-zinc-100 w-80 h-12 bg-gray-200 rounded-full">
                  {/* Skeleton for large heading */}
                </div>
                {/* Removed comment about h2 */}
              </div>
              {/* Skeleton for description */}
              <div className="prose prose-invert py-8 text-zinc-400">
                <div className="prose prose-invert py-8 text-zinc-400">
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

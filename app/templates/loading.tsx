import { Navigation } from "@/components/nav";

export default function Loading() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="font-foldit text-8xl tracking-tight text-zinc-100 animate-pulse"></h1>
          <p className="mt-4 text-zinc-400">
            Bring your business to life with our customizable websites.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          <div>
            <a href={`/templates/`}>
              <article className="relative h-full w-full p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center animate-pulse">
                  <div className="text-xs text-zinc-100 h-4 w-16 rounded bg-gray-200"></div>
                  <span className="text-zinc-500 text-xs flex items-center gap-1 animate-pulse">
                    <div className="w-4 h-4 rounded bg-gray-200"></div>
                    <div className="w-8 h-8 rounded bg-gray-200"></div>
                  </span>
                </div>
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 animate-pulse h-12 w-64 rounded bg-gray-200"
                ></h2>
                <div className="relative mb-3 min-h-[250px] sm:min-h-[350px] md:mb-5">
                  <img
                    className="object-contain animate-pulse w-full h-48 rounded bg-gray-200"
                    alt="drawing of a cat"
                    src="..."
                  />
                </div>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300 h-16 rounded bg-gray-200 animate-pulse"></p>
              </article>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

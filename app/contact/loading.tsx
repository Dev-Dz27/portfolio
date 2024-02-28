// import { Navigation } from "@/components/nav";

export default function Loading() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      {/* <Navigation /> */}
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {[...new Array(3)].map((s, index) => (
            <div key={index}>
              <a href="#" className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16">
                <div className="relative w-12 h-12 bg-gray-200 rounded-full animate-pulse"> {/* Skeleton for icon */}
                </div>
                <div className="z-10 flex flex-col items-center mt-4">
                  <div className="w-40 h-4 bg-gray-200 rounded-full animate-pulse"></div> {/* Skeleton for handle */}
                  <div className="w-24 h-4 bg-gray-200 rounded-full mt-4 animate-pulse"></div> {/* Skeleton for label */}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

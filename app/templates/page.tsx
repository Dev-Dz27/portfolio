import Link from "next/link";
import Image from "next/image";
import React from "react";
import { allTemplates } from "contentlayer/generated"; // Update to allTemplates
import { Navigation } from "@/components/nav";
import { Card } from "@/components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allTemplates.map((p) => ["pageviews", "templates", p.slug].join(":"))
    )
  ).reduce((acc, v, i) => {
    acc[allTemplates[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);
  const featured = allTemplates.find((template) => template.slug === "kimox")!;

  const top2 = allTemplates.find((project) => project.slug === "seeva")!;
  const top3 = allTemplates.find((project) => project.slug === "kinco")!;
  const excludedSlugs = [featured.slug, top2.slug, top3.slug];

  const sorted = allTemplates
    .filter((t) => t.published && !excludedSlugs.includes(t.slug))
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="font-foldit text-8xl tracking-tight text-zinc-100">
            Templates
          </h1>
          <p className="mt-4 text-zinc-400">
            Bring your business to life with our customizable websites.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/templates/${featured.slug}`}>
              <article className="relative h-full w-full p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="text-zinc-500 text-xs  flex items-center gap-1">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold  text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <div className="relative mb-3 min-h-[250px] sm:min-h-[350px] md:mb-5">
                  <Image
                    className="object-contain"
                    src={`${featured?.featuredImage}`}
                    fill={true}
                    alt={`${featured.title} image`}
                    placeholder="blur"
                    //   blurDataURL={featured.image.asset?.metadata.lqip}
                    blurDataURL="/booking-react-redux-light-blur.jpg"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8  mx-auto border-t border-gray-900/10  lg:mx-0  lg:border-t-0 ">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        {/* <div className="grid  grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 0)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 1)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 2)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div>
				</div> */}

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {sorted
            // .filter((_, i) => i % 3 === 2)
            .map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}

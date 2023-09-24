import { notFound } from "next/navigation";
// import { allProjects } from "contentlayer/generated";
import { allTemplates } from "contentlayer/generated";
import { Mdx } from "@/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allTemplates
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const template = allTemplates.find((template) => template.slug === slug);

	if (!template) {
		notFound();
	}

	const views =
	(await redis.get<number>(["pageviews", "templates", slug].join(":"))) ?? 0;
	return (
		<div className="bg-zinc-50 min-h-screen">
			<Header project={template} views={views} />
			<ReportView slug={template.slug} />

			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				<Mdx code={template.body.code} />
			</article>
		</div>
	);
}

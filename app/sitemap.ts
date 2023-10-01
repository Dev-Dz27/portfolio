import { allProjects, allTemplates } from "contentlayer/generated";

export default async function sitemap() {
  const projects = allProjects.map((project) => ({
    url: `https://www.bytebeatdz.com/projects/${project.slug}`,
    lastModified: project.date,
  }));
  const templates = allTemplates.map((template) => ({
    url: `https://www.bytebeatdz.com/templates/${template.slug}`,
    lastModified: template.date,
  }));

  const routes = ["", "/about", "/contact", "/projects",  "/templates", ].map(
    (route) => ({
      url: `https://www.bytebeatdz.com${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  return [...routes, ...projects, ...templates];
}

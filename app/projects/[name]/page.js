import ProjectDetails from "./ProjectDetails";
import { projects } from "@/app/data/data";

export async function generateMetadata({ params }) {
  const { name } = await params;
  const project = projects.find(
    (proj) =>
      proj.name.toLowerCase() === name?.replace("%20", " ").toLowerCase()
  );

  return {
    title: project ? `${project.name} - Project` : "Project Not Found",
    description: project
      ? project.shortDescription
      : "The requested project could not be found.",
  };
}

export default async function Page({ params }) {
  const { name } = await params;
  const project = projects.find(
    (proj) =>
      proj.name.toLowerCase() === name?.replace("%20", " ").toLowerCase()
  );

  return <ProjectDetails project={project} />;
}

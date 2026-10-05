import ProjectDetails from "./ProjectDetails";
import { projects } from "@/app/data/data";

export async function generateMetadata({ params }) {
  const { name } = await params;
  const decoded = decodeURIComponent(name || "").toLowerCase();
  const project = projects.find(
    (proj) => proj.name.toLowerCase() === decoded
  );

  return {
    title: project ? `${project.name} - Project Details` : "Project Not Found",
    description: project
      ? project.shortDescription
      : "The requested project could not be found.",
  };
}

export default async function Page({ params }) {
  const { name } = await params;
  const decoded = decodeURIComponent(name || "").toLowerCase();
  const project = projects.find(
    (proj) => proj.name.toLowerCase() === decoded
  );

  return <ProjectDetails project={project} />;
}

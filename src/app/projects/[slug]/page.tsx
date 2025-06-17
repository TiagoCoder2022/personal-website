import { notFound } from "next/navigation";
import { projects } from "@/app/data";
import ProjectContent from "@/components/project-content";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const ProjectsPage = async ({ params }: Props) => {
  // Aguarda a resolução da Promise dos params
  const { slug } = await params;

  const projectData = projects.find((project) => project.slug === slug);

  if (!projectData) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col justify-center w-full pb-10 mx-auto">
      <div className="container mx-auto flex-1 px-5 md:px-6 sm:px-8">
        <ProjectContent {...projectData} />
      </div>
    </main>
  );
};

export default ProjectsPage;
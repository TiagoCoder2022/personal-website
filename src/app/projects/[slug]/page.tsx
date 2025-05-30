import { notFound } from "next/navigation";
import { projects } from "@/app/data";
import ProjectContent from "@/components/project-content";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const ProjectsPage = ({ params }: ProjectPageProps) => {
  const { slug } = params;

  const projectData = projects.find((project) => project.slug === slug);

  if (!projectData) {    
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col justify-center w-full pb-10 mx-auto">
      <Navbar />
      <div className="container mx-auto flex-1 px-5 md:px-6 sm:px-8">
        <ProjectContent {...projectData} />
        <Footer />
      </div>
    </main>
  );
};

export default ProjectsPage;

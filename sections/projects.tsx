import ProjectGrid from "@/components/project-grid";
import SectionHeader from "@/components/section-header";

const Projects = () => {
  return (
    <section className="pb-16" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="What I've Built"
          title="Featured Projects"
          description="Here's a selection of projects I've worked on. Each one
          highlights my dedication to quality and attention to detail."
        />

        <div className="mt-8 space-y-10 md:mt-24 lg:space-y-24">
          <ProjectGrid />
        </div>
      </div>
    </section>
  );
};

export default Projects;

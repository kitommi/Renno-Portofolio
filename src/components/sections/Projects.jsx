import { projects } from '../../data/projects'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import ProjectCard from '../projects/ProjectCard'
import Reveal from '../animations/Reveal'

export default function Projects() {
  return (
    <Section id="projects" aria-labelledby="projects-title">
      <SectionHeading
        id="projects-title"
        title="Selected work"
        description="Real projects at different stages. Some are prototypes, others are still being built."
      />
      <div className="grid gap-6 md:grid-cols-6">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 3) * 0.08} className={project.span}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

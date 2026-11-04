import { projects } from '../../data/projects'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import ProjectCard from '../projects/ProjectCard'
import GitHubPanel from '../projects/GitHubPanel'
import Reveal from '../animations/Reveal'

export default function Projects() {
  const featured = projects.filter((p) => p.layout === 'featured')
  const secondary = projects.filter((p) => p.layout === 'secondary')
  const compact = projects.filter((p) => p.layout === 'compact')

  return (
    <Section id="projects" aria-labelledby="projects-title">
      <SectionHeading
        id="projects-title"
        title="Selected work"
        description="Real projects at different stages. Some are prototypes, others are still being built."
      />

      <div className="grid gap-6 md:grid-cols-6">
        {featured.map((project) => (
          <Reveal key={project.id} className="md:col-span-6">
            <ProjectCard project={project} />
          </Reveal>
        ))}
        {secondary.map((project) => (
          <Reveal key={project.id} className="md:col-span-4">
            <ProjectCard project={project} />
          </Reveal>
        ))}
        {compact.length > 0 && (
          <div className="flex flex-col gap-6 md:col-span-2">
            {compact.map((project, index) => (
              <Reveal key={project.id} delay={(index + 1) * 0.08} className="flex-1">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <GitHubPanel />
    </Section>
  )
}

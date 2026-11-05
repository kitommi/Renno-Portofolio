import { skillGroups } from '../../data/skills'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import Badge from '../common/Badge'
import Reveal from '../animations/Reveal'

export default function Skills() {
  return (
    <Section id="skills" aria-labelledby="skills-title">
      <SectionHeading
        id="skills-title"
        title="Skills & technologies"
        description="Teknologi yang pernah saya jelajahi, pakai, atau masih saya pelajari."
      />
      <div>
        {skillGroups.map((group) => (
          <Reveal
            key={group.title}
            className="grid gap-4 border-t border-line py-6 md:grid-cols-12 md:gap-10"
          >
            <h3 className="text-title font-medium md:col-span-4">{group.title}</h3>
            <ul className="flex flex-wrap gap-2 md:col-span-8">
              {group.items.map((item) => (
                <li key={item}>
                  <Badge
                    tone="strong"
                    className="transition-colors duration-300 hover:border-fg motion-reduce:transition-none"
                  >
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

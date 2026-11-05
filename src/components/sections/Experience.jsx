import { experience } from '../../data/experience'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../animations/Reveal'

export default function Experience() {
  return (
    <Section id="experience" aria-labelledby="experience-title">
      <SectionHeading
        id="experience-title"
        title="Experience"
        description="Pengalaman langsung dari proyek-proyek di atas, sesuai peran yang benar-benar saya jalani."
      />
      <ul>
        {experience.map((item) => (
          <Reveal
            as="li"
            key={item.context}
            className="grid gap-3 border-t border-line py-6 md:grid-cols-12 md:gap-10"
          >
            <div className="md:col-span-4">
              <h3 className="text-title font-medium">{item.role}</h3>
              <p className="mt-1 text-small text-fg-2">{item.context}</p>
            </div>
            <p className="text-body text-fg-2 md:col-span-8">{item.description}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

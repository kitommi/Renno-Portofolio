import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../animations/Reveal'

const facts = [
  { label: 'Status', value: 'Open to internship opportunities' },
  { label: 'Works with', value: 'HTML, CSS, JavaScript, PHP, Python, Dart' },
  { label: 'Team experience', value: 'Team leader on SonicFlows' },
]

export default function About() {
  return (
    <Section id="about" aria-labelledby="about-title">
      <SectionHeading
        id="about-title"
        title="About"
        description="A developer in the making, learning by building real things."
      />
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="space-y-6 text-lead md:col-span-7">
          <p>
            I am Muhammad Renno Agustovano, an aspiring software developer who learns by
            building. I enjoy turning an idea into something people can open, click through,
            and use.
          </p>
          <p className="text-fg-2">
            My projects so far range from a reforestation-themed web prototype and a simple
            Flappy Bird-style game to a Flutter app connected to Supabase. Working across
            them keeps me curious about how the different pieces of a product fit together.
          </p>
          <p className="text-fg-2">
            I like building with other people, too. I came up with the idea for SonicFlows and
            lead its team. Now I am looking for an internship where I can keep learning with a
            team and contribute where I can.
          </p>
        </Reveal>

        <Reveal as="dl" delay={0.1} className="grid content-start gap-6 md:col-span-5">
          {facts.map((fact) => (
            <div key={fact.label} className="border-t border-line pt-4">
              <dt className="text-small text-fg-2">{fact.label}</dt>
              <dd className="mt-1 text-body">{fact.value}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}

import { journalEntries } from '../../data/journal'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import Card from '../common/Card'
import Badge from '../common/Badge'
import Reveal from '../animations/Reveal'

export default function Journal() {
  return (
    <Section id="journal" aria-labelledby="journal-title">
      <SectionHeading
        id="journal-title"
        title="Mini journal"
        description="Short notes on what I am building and learning."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {journalEntries.map((entry, index) => (
          <Reveal key={entry.id} delay={index * 0.1}>
          <Card as="article" variant="raised" className="h-full">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{entry.tag}</Badge>
              {entry.date && <span className="text-caption text-fg-2">{entry.date}</span>}
            </div>
            <h3 className="mt-6 text-title font-medium">{entry.title}</h3>
            <p className="mt-3 text-body text-fg-2">{entry.summary}</p>
          </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

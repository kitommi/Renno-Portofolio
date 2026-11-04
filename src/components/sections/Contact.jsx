import { Github, Mail, MessageCircle } from 'lucide-react'
import { site } from '../../lib/site'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import TextLink from '../common/TextLink'
import Card from '../common/Card'
import ContactForm from './ContactForm'
import Reveal from '../animations/Reveal'

const methods = [
  {
    label: 'Email',
    icon: Mail,
    value: site.email,
    href: site.email ? `mailto:${site.email}` : null,
  },
  {
    label: 'WhatsApp',
    icon: MessageCircle,
    value: site.whatsapp ? site.whatsappLabel : null,
    href: site.whatsapp ? `https://wa.me/${site.whatsapp}` : null,
  },
  {
    label: 'GitHub',
    icon: Github,
    value: `github.com/${site.githubUsername}`,
    href: site.github,
  },
]

export default function Contact() {
  return (
    <Section id="contact" aria-labelledby="contact-title">
      <SectionHeading
        id="contact-title"
        title="Get in touch"
        description="I am open to internship opportunities and happy to talk about my projects."
      />
      <div className="grid gap-12 lg:grid-cols-12">
        <ul className="space-y-6 lg:col-span-5">
          {methods.map(({ label, icon: Icon, value, href }, index) => (
            <Reveal
              as="li"
              key={label}
              delay={index * 0.08}
              className="flex items-start gap-4 border-t border-line pt-4"
            >
              <Icon size={20} className="mt-1 text-fg-2" aria-hidden="true" />
              <div>
                <p className="text-small text-fg-2">{label}</p>
                {value ? (
                  <TextLink href={href} className="text-body">
                    {value}
                  </TextLink>
                ) : (
                  <p className="text-body text-fg-2">To be added</p>
                )}
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1} className="lg:col-span-7">
          <Card variant="raised" className="relative">
            <ContactForm />
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}

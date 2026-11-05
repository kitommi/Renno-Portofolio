import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../animations/Reveal'

const facts = [
  { label: 'Status', value: 'Terbuka untuk kesempatan magang' },
  { label: 'Teknologi', value: 'HTML, CSS, JavaScript, PHP, Python, Dart' },
  { label: 'Pengalaman tim', value: 'Ketua tim SonicFlows' },
]

export default function About() {
  return (
    <Section id="about" aria-labelledby="about-title">
      <SectionHeading
        id="about-title"
        title="About"
        description="Developer yang masih berkembang, belajar lewat membangun hal-hal nyata."
      />
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="space-y-6 text-lead md:col-span-7">
          <p>
            Saya Muhammad Renno Agustovano, calon software developer yang belajar sambil
            membangun. Saya senang mengubah sebuah ide menjadi sesuatu yang bisa dibuka,
            diklik, dan benar-benar dipakai orang.
          </p>
          <p className="text-fg-2">
            Proyek-proyek saya sejauh ini beragam, dari prototype web bertema penghijauan dan
            game Flappy Bird sederhana, sampai aplikasi Flutter yang terhubung ke Supabase.
            Mengerjakan berbagai hal ini membuat saya penasaran bagaimana setiap bagian dari
            sebuah produk saling terhubung.
          </p>
          <p className="text-fg-2">
            Saya juga suka membangun bersama orang lain. Saya mencetuskan ide SonicFlows dan
            memimpin timnya. Sekarang saya sedang mencari kesempatan magang untuk terus belajar
            bersama tim dan berkontribusi sebisa saya.
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

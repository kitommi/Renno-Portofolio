import { cn } from '../../lib/cn'
import Container from './Container'

// Pembungkus setiap section: jarak vertikal konsisten + Container.
// Beri aria-labelledby yang menunjuk id heading di dalamnya.
export default function Section({ id, className, children, ...props }) {
  return (
    <section id={id} className={cn('py-section', className)} {...props}>
      <Container>{children}</Container>
    </section>
  )
}

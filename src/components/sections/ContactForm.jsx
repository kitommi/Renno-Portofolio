import { useState } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { cn } from '../../lib/cn'
import { site } from '../../lib/site'
import Button from '../common/Button'

// Jika VITE_FORMSPREE_ENDPOINT diisi (lihat .env.example), pesan dikirim lewat Formspree.
// Jika belum, formulir membuka aplikasi email pengunjung dengan pesan yang sudah terisi.
const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT
const initialValues = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (values.message.trim().length < 10) errors.message = 'Please write at least 10 characters.'
  return errors
}

const fieldClass = (hasError) =>
  cn(
    'w-full rounded-lg border bg-bg px-4 py-3 text-body text-fg transition-colors duration-300 motion-reduce:transition-none',
    hasError ? 'border-fg' : 'border-line hover:border-fg-3',
  )

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-small font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-2 text-small text-fg">
          <AlertCircle size={14} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const connected = Boolean(ENDPOINT)
  const canSubmit = connected || Boolean(site.email)

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
    if (status !== 'idle' && status !== 'loading') setStatus('idle')
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (!canSubmit || status === 'loading') return

    const form = event.currentTarget
    if (form.elements._gotcha.value) return // jebakan spam: bot mengisi kolom tersembunyi

    const found = validate(values)
    setErrors(found)
    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      form.elements[firstInvalid].focus()
      return
    }

    if (!connected) {
      const subject = encodeURIComponent(`Portfolio message from ${values.name.trim()}`)
      const body = encodeURIComponent(
        `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`,
      )
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      setStatus('mailto')
      return
    }

    setStatus('loading')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error('Request failed')
      setValues(initialValues)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {!connected && (
        <p className="rounded-lg border border-line bg-bg-2 p-4 text-small text-fg-2">
          Direct sending is not set up yet. This form opens your email app with your message
          ready to send.
        </p>
      )}

      <Field id="contact-name" label="Name" error={errors.name}>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={fieldClass(errors.name)}
        />
      </Field>

      <Field id="contact-email" label="Email" error={errors.email}>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className={fieldClass(errors.email)}
        />
      </Field>

      <Field id="contact-message" label="Message" error={errors.message}>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={cn(fieldClass(errors.message), 'resize-y')}
        />
      </Field>

      {/* Kolom jebakan spam: tersembunyi dari pengguna dan pembaca layar. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-gotcha">Leave this field empty</label>
        <input id="contact-gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={!canSubmit || status === 'loading'}>
          {status === 'loading' ? (
            <>
              <Loader2 size={16} className="animate-spin motion-reduce:animate-none" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} aria-hidden="true" />
              {connected ? 'Send message' : 'Open in email app'}
            </>
          )}
        </Button>

        {status === 'success' && (
          <p role="status" className="flex items-center gap-2 text-small">
            <CheckCircle2 size={16} aria-hidden="true" />
            Thanks! Your message was sent.
          </p>
        )}
        {status === 'mailto' && (
          <p role="status" className="flex items-center gap-2 text-small">
            <CheckCircle2 size={16} aria-hidden="true" />
            Your email app should open now. If not, email {site.email} directly.
          </p>
        )}
        {status === 'error' && (
          <p role="alert" className="flex items-center gap-2 text-small">
            <AlertCircle size={16} aria-hidden="true" />
            Something went wrong. Please try again or email me directly.
          </p>
        )}
      </div>
    </form>
  )
}

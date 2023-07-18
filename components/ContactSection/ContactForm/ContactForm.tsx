/* eslint-disable no-console */
import { useFormik } from 'formik'
import { useState } from 'react'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { trpc } from '../../../trpc'
import * as styles from './ContactForm.css'

// TODO Import these from API
export const StoreContactFormEntryRequest = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
  company: z.string().optional(),
})

type StoreContactFormEntryRequestType = z.infer<
  typeof StoreContactFormEntryRequest
>

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [sendSuccess, setSendSuccess] = useState(false)

  const storeContactFormEntry = trpc.general.storeContactFormEntry.useMutation()

  const formik = useFormik<StoreContactFormEntryRequestType>({
    initialValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
    validationSchema: toFormikValidationSchema(StoreContactFormEntryRequest),
    onSubmit: async (values) => {
      setIsLoading(true)
      /**
       * Clear initial '' values that are optional. Stupid Formik limitation.
       * https://github.com/jaredpalmer/formik/issues/568
       */
      const formEntries = Object.fromEntries(
        Object.entries(values).filter(
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          ([_key, value]) => value !== null && value !== '',
        ),
      ) as StoreContactFormEntryRequestType

      await storeContactFormEntry.mutateAsync(
        {
          ...formEntries,
        },
        {
          onSuccess: () => {
            formik.resetForm()
            setIsLoading(false)
            setSendSuccess(true)
          },
          onError: (error) => {
            console.error(error)
            setIsLoading(false)
          },
        },
      )
    },
  })

  if (sendSuccess) {
    return (
      <div className={styles.inputWrapper}>
        <div className={styles.verification}>
          <p>Thank you for your message. We will get back you soon.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          placeholder="Name *"
          required
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          id="name"
        />
        <input
          type="email"
          className={styles.input}
          placeholder="Email *"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          id="email"
        />
        <input
          className={styles.input}
          placeholder="Company"
          value={formik.values.company}
          onChange={formik.handleChange}
          name="company"
          id="company"
        />
        <textarea
          className={styles.messageInput}
          placeholder="Message *"
          value={formik.values.message}
          onChange={formik.handleChange}
          required
          name="message"
          id="message"
        />
      </div>
      <div className={styles.bottom}>
        <button type="submit" className={styles.button} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}

'use server'
import { redirect } from 'next/navigation'
import { z } from 'zod'

export async function logIn(prevState: any, formData: FormData) {
    const schema = z.object({
        email: z.string({ invalid_type_error: 'Invalid email' }),
        password: z.string().min(20),
    })

    const data = schema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!data.success) {
        return {
            errors: data.error.flatten().fieldErrors,
        }
    }

    redirect('/dashboard')
}

'use client'
import FormButton from '@/app/FormButton'
import FormInput from '@/app/FormInput'
import { logIn } from '@/app/actions'
import Link from 'next/link'
import { useFormState } from 'react-dom'

const initialFormState = {
    message: null,
    errors: {},
}

export default function Page() {
    const [state, formAction] = useFormState(logIn, initialFormState)

    return (
        <>
            <h1 className="mb-2">Login</h1>
            <form className="mb-2" action={formAction}>
                <FormInput errors={state.errors} name="email" required />
                <FormInput errors={state.errors} name="password" required />
                <FormButton label="Log in" />
            </form>
            <p className="text-green-700">{state.message}</p>
            <p>
                Don&apos;t have an account?{' '}
                <Link href="/register" className="i-link">
                    Register
                </Link>
            </p>
        </>
    )
}

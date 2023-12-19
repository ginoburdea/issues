import { useFormStatus } from 'react-dom'

export default function FormButton({ label }: { label: String }) {
    const { pending } = useFormStatus()

    return (
        <button type="submit" className="i-button" aria-disabled={pending}>
            {label}
        </button>
    )
}

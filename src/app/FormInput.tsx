import { sentenceCase } from 'change-case'
import clsx from 'clsx'
import { ChangeEventHandler, useState } from 'react'

const getType = (name: string): string => {
    switch (name) {
        case 'email':
        case 'password':
            return name
        default:
            return 'text'
    }
}

export default function Input(props: {
    type?: string
    errors?: { [key: string]: string[] }
    name: string
    value?: any
    required?: boolean
    onChange?: ChangeEventHandler<HTMLInputElement>
}) {
    const error = props.errors ? props.errors[props.name]?.at(0) : null

    return (
        <div className="mb-3">
            <input
                type={props.type || getType(props.name)}
                value={props.value}
                onChange={props.onChange}
                placeholder={sentenceCase(props.name)}
                name={props.name}
                required={props.required || false}
                className={clsx(
                    'block py-1 px-4 outline-none w-full border-2',
                    !!error ? 'border-red-700' : 'border-white',
                )}
            />
            <p className="text-red-700">{error}</p>
        </div>
    )
}

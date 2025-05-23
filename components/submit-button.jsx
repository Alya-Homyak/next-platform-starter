'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton({ text = 'Submit' }) {
    const { pending } = useFormStatus();
    return (
        <button className="btn" type="submit" disabled={pending}>
            {text}
        </button>
    );
}

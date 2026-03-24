'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export const BackButton: React.FC = () => {
    const router = useRouter()

    return (
        <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 text-white rounded-lg hover:bg-zinc-700 transition"
        >
            ← Back
        </button>
    )
}
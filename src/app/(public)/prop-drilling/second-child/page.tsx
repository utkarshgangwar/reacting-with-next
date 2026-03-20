'use client'

import React from 'react'

type SecondChildProps = {
    messageSecond?: string
}

const SecondChild: React.FC<SecondChildProps> = ({ messageSecond }) => {
    return (
        <div className="p-4 mt-4 border border-zinc-700 rounded-xl bg-zinc-800 space-y-3">

            <h1 className="text-lg font-semibold text-white">
                Second Child Component
            </h1>

            <input
                type="text"
                value={messageSecond ?? ""}
                readOnly
                placeholder="You've not passed any message to the second child component"
                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 text-white rounded-md placeholder:text-zinc-500"
            />
        </div>
    )
}

export default SecondChild
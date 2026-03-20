'use client'

import React from 'react'
import SecondChild from '../second-child/page'

type ChildProps = {
    message: string
    messageSecond?: string
}

const ChildComponent: React.FC<ChildProps> = ({ message, messageSecond }) => {
    return (
        <>
            <div className="p-4 border border-zinc-700 rounded-xl bg-zinc-800 space-y-3">

                <h1 className="text-lg font-semibold text-white">
                    Child Component
                </h1>

                <input
                    type="text"
                    value={message ?? ""}
                    readOnly
                    placeholder="Nothing provided to the child component"
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 text-white rounded-md placeholder:text-zinc-500"
                />

                {messageSecond && (
                    <p className="text-sm text-zinc-400">
                        Second message triggered re-render:{" "}
                        <strong className="text-white">{messageSecond}</strong>
                    </p>
                )}
            </div>

            {/* Second Child */}
            <div className="mt-4">
                <SecondChild messageSecond={messageSecond ?? ""} />
            </div>
        </>
    )
}

export default ChildComponent
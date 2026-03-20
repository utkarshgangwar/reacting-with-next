'use client'

import React, { useState } from 'react'
import ChildComponent from '../child/page'

const Page: React.FC = () => {
  const [messageToChild, setMessageToChild] = useState<string>("")
  const [messageToChild2, setMessageToChild2] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageToChild(e.target.value)
  }

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageToChild2(e.target.value)
  }

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-zinc-800 shadow-xl rounded-2xl p-6 space-y-6 border border-zinc-700">

        {/* Header */}
        <h1 className="text-2xl font-semibold text-white text-center">
          Parent Component
        </h1>

        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">
              First Message
            </label>
            <input
              type="text"
              value={messageToChild}
              onChange={handleChange}
              placeholder="Enter first message..."
              className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 text-white rounded-lg placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">
              Second Message
            </label>
            <input
              type="text"
              value={messageToChild2}
              onChange={handleChange2}
              placeholder="Enter second message..."
              className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 text-white rounded-lg placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Info */}
        <p className="text-sm text-zinc-400 text-center">
          Data is automatically passed to child component
        </p>

        {/* Child */}
        <div className="border-t border-zinc-700 pt-4">
          <ChildComponent
            message={messageToChild}
            messageSecond={messageToChild2}
          />
        </div>

      </div>
    </div>
  )
}

export default Page
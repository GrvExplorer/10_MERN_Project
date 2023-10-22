import React from 'react'
import { Link } from 'react-router-dom'

function BackButton() {
  return (
    <div>
        <Link to={'/'}>
            <button className="rounded-md border bg-black px-6 py-2 hover:bg-gray-800 text-white cursor-pointer ">
                Back
            </button>
        </Link>

    </div>
  )
}

export default BackButton
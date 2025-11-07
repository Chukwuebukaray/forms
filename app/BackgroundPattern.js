import React from 'react'

const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 w-full h-1/2">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 200 Q100 150 200 200 T400 200 L400 300 L0 300 Z"
                  fill="white"
                />
                <rect
                  x="50"
                  y="150"
                  width="60"
                  height="60"
                  rx="8"
                  fill="white"
                />
                <rect
                  x="300"
                  y="180"
                  width="40"
                  height="40"
                  rx="8"
                  fill="white"
                />
              </svg>
            </div>
          </div>
  )
}

export default BackgroundPattern

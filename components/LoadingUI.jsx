import React from 'react'

const LoadingUI = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center dark:bg-gray-700 bg-[#B3D5F2]/20 ">
        <div className="flex space-x-2">
          <div className="h-4 w-4 rounded-full animate-bounce bg-[#4AA2D9]"></div>
          <div className="h-4 w-4 rounded-full animate-bounce bg-[#4AA2D9]"></div>
          <div className="h-4 w-4 rounded-full animate-bounce bg-[#4AA2D9]"></div>
        </div>
        <h2 className="font-normal text-xl italic dark:text-white">Loading...</h2>
      </main>
  )
}

export default LoadingUI
import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-white dark:bg-zinc-900 pb-28 pt-28 lg:pt-48'>
       <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-sans font-bold tracking-tighter  text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-700  dark:bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 '>Unsere Kollektion</h1>
       <h2 className='text-sm lg:text:md w-48 text-center text-zinc-500 dark:text-zinc-400'>Jetzt Wunder entdecken und Träume Shoppen.</h2>
    </div>
  )
}

export default Header

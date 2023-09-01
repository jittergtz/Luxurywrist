import React from 'react'

const Card = () => {
  return ( 

<div className='flex flex-col lg:flex-row  items-center justify-center bg-white dark:bg-black'>

<div className="card card-compact w-96 bg-base-100 dark:bg-zinc-950 dark:border border-zinc-800 shadow-xl m-6 ">
<div className="badge bg-emerald-800 border-emerald-800 text-zinc-300 ">Beliebt</div>
<figure><img src="./img/rolex.webp" alt="Watch" /></figure>
<div className="card-body dark:text-zinc-200">
  <h2 className="card-title">Rolex Daydate 40</h2>
  <p>Neuwertig und ungetragen. Von unseren zertifizierten Uhrmachern auf Echtheit geprüft.</p>
  <div className="card-actions justify-end">
    <button className="btn  text-zinc-300 bg-emerald-800 hover:bg-emerald-600 border-emerald-800">Jetzt Kaufen</button>
  </div>
</div>
</div>

<div className="card card-compact w-96 bg-base-100  dark:bg-zinc-950 dark:border border-zinc-800 shadow-xl m-6 ">
<div className="badge  bg-emerald-800 border-emerald-800 text-zinc-300">Beliebt</div>
<figure><img src="./img/rolex4.png" alt="Watch" /></figure>
<div className="card-body dark:text-zinc-200">
  <h2 className="card-title">Rolex Daydate 30</h2>
  <p>Neuwertig und ungetragen. Von unseren zertifizierten Uhrmachern auf Echtheit geprüft.</p>
  <div className="card-actions justify-end">
    <button className="btn  text-zinc-300 bg-emerald-800 hover:bg-emerald-600 border-emerald-800">Jetzt Kaufen</button>
  </div>
</div>
</div>

<div className="card card-compact w-96 bg-base-100 dark:bg-zinc-950 dark:border border-zinc-800 shadow-xl m-6 ">
<div className="badge  bg-emerald-800 border-emerald-800 text-zinc-300">Beliebt</div>
<figure><img src="./img/rolex5.png" alt="Watch" /></figure>
<div className="card-body dark:text-zinc-200">
  <h2 className="card-title">Rolex Daydate 30</h2>
  <p>Neuwertig und ungetragen. Von unseren zertifizierten Uhrmachern auf Echtheit geprüft.</p>
  <div className="card-actions justify-end">
    <button className="btn  text-zinc-300 bg-emerald-800 hover:bg-emerald-600 border-emerald-800">Jetzt Kaufen</button>
         </div>
     </div>
    </div>
</div>
  )
}

export default Card

import React from 'react'

const Hero = () => {
  return (
<div className="hero min-h-screen" style={{backgroundImage: 'url(./img/w2.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-zinc-100 ">Luxury wrist</h1>
      <p className="mb-5 text-zinc-200">Träume nur ein hauch entfenrt. Bestellen sie noch heute ihre Uhr und verwirklichen sie ihren Traum, wir bieten das beste was es im Markt gibt.</p>
      <a className="btn bg-zinc-900 hover:bg-zinc-700 text-zinc-200 border-none" href='collections' >Jetzt Shoppen</a>
    </div>
  </div>
</div>
  )
}

export default Hero


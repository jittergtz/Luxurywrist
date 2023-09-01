import Card from "./components/card"
import Card2 from "./components/card2"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Info from "./components/info"
import Nav from "./components/nav"


export default function Home() {
  return (

    <main>
    <Nav/>
    <Hero/>

    <div className="flex justify-center bg-white  dark:bg-black pt-20 pb-20">
        <h1 className="text-3xl font-semibold text-zinc-800 dark:text-zinc-300 " >Am Beliebtesten</h1>
      </div>

        <Card />

        
<div className='flex justify-center pt-20 pb-20 bg-white dark:bg-black'>
    <h1 className='text-3xl font-semibold dark:text-zinc-300 text-zinc-800'>Neu Reingekommen</h1>
</div>
        <Card2/>


      <section className="flex justify-center bg-white dark:bg-black pt-48 pb-64">
        <div className="h-[30rem] m-10 w-[70rem] rounded-xl shadow-xl bg-gradient-to-br from-zinc-900 to-zinc-700 ">
          <h1 className="p-8 text-4xl xl:text-5xl  font-semibold text-zinc-100 lg:mt-5">Wir verkaufen Träume.</h1>
          <p className="p-8 lg:pr-96 text-lg xl:text-xl -mt-10 text-zinc-200 lg:mt-5">hier kaufen sie nicht nur ihre Wunsch Uhr sondern können auch ihre alten Uhren an uns verkaufen. Transparente faire Preise, vereinbaren sie jetzt ein Termin mit uns.</p>
          <p className="p-8 lg:pr-96 text-lg xl:text-xl -mt-10 text-zinc-200 ">Nicht nur kaufen sondern auch wartern austauschen und Reparieren ihe Uhr ist bei uns in besten Händen um solang wie möglich den glanz und die Qualität ihe Uhr zu wahren.</p>
        </div>
      </section>

      <Info/>

      
        <Footer/>
    
    </main>


	

  )
}

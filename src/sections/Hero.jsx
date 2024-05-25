import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics } from "../constants"

const Hero = () => {
  return (
    <section className="border border-2 
                        border-red-500
                        w-full flex flex-col xl:flex-row 
                        justify-center min-h-screen 
                        gap-10 max-container p-2">
        <div className="relative 
                        flex flex-col
                        justify-center items-start
                        w-full md:padding-x pt-28
                        border border-1
                        border-blue-900">
            <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
            <h1 className="mt-10 font-palanquin 
            text-8xl max-sm:text-[72px
             max-sm:leading-[82] font-bold">
                <span className="xl:bg-white 
                xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                <br/>
                <span className="text-coral-red 
                inline-block">Nike</span> Shoes
            </h1>
            <p className="font-montserrat text-slate-gray 
            text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
              Discover stylish Nike arrivals, quality comfort, and innovation 
              for your active life.
            </p>

            <Button label="Shop now" iconURL={arrowRight} />
        
            <div className="flex w-full border border-0 
            justify-starts items-start flex-wrap 
            mt-20 gap-16">
              {statistics.map((stat)=>(
                <div key={stat.label}>
                    <p className="text-4xl font-palanquin">{stat.value}</p>
                    <p>{stat.label}</p>
                </div>
              ))}
            </div>
        </div>

    </section>
  )
}

export default Hero
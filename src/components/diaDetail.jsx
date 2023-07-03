import { Link, useParams } from 'react-router-dom';
import plan from '../assests/plan.json'

const DiaDetail = () => {
  const {id} = useParams()
  return (
  <div>
    <section class="bg-gray-900 text-white">
    <div
      class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
    >
      <div class="mt-12 text-center">
        <a
          href="/"
          class="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400 font-[Poppins]"
        >
          Ir a la homepage
        </a>
      </div>
        {plan.map((day, index) => {
          if(day.id === parseInt(id))
          return (
          <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div class="mx-auto max-w-lg text-center">
              <h2 class="text-3xl font-bold sm:text-4xl font-[Poppins]">{`Día ${id} - ${day.name}`}</h2>
            </div>
            <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <h2 class="mt-4 mb-4 text-xl text-center font-bold text-white font-[Poppins]">{day.warmup?.name}</h2>
              {day.warmup?.ejercicios.map((ej, index) => {return (
                <div>
                  <div
                    class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    href=""
                  >
                    <h2 class="mt-4 text-xl font-bold text-white font-[Poppins]">{ej.name}</h2>
                    <p class="mt-1 text-sm text-gray-300 font-[Poppins]">{ej.repeticiones && `${ej.repeticiones} repeticiones`} </p>
                    <p class="mt-1 text-sm text-gray-300 font-[Poppins]">{ej.time && `${ej.time}`} </p>
                    <p class="mt-1 text-sm text-gray-300 font-[Poppins]">{ej.series && `${ej.series} series`} </p>
                    <img
                      src={ej.gif ? ej.gif : "https://media.self.com/photos/5c38f6e074ba5e49b67b0ba5/2:1/w_1280,c_limit/free-weights-lede.jpg"}
                      className='h-16 w-16'
                    />

                  </div>
                </div>
              )})}
              
              <h2 class="mt-4 mb-4 text-xl text-center font-bold text-white font-[Poppins]">{day.anaerobico?.name}</h2>  

              {day.anaerobico?.ejercicios.map((ej, index) => {return (
                <div>
                  <div
                    class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    href=""
                  >
                    <h2 class="mt-4 text-xl font-bold text-white font-[Poppins]">{ej.name}</h2>
                    <p class="mt-1 text-sm text-gray-300 font-[Poppins]">{ej.repeticiones && `${ej.repeticiones} repeticiones`} </p>
                    <p class="mt-1 text-sm text-gray-300 font-[Poppins]">{ej.time && `${ej.time}`} </p>
                    <p class="mt-1 text-sm text-gray-300 font-[Poppins]">{ej.series && `${ej.series} series`} </p>
                    <img
                      src={ej.gif ? ej.gif : "https://media.self.com/photos/5c38f6e074ba5e49b67b0ba5/2:1/w_1280,c_limit/free-weights-lede.jpg"}
                      className='h-16 w-16'
                    />
                  </div>
                </div>
              )})}
            </div>
          </div>
        )})}
  
        <div class="mt-12 text-center">
          <a
            href="/"
            class="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400 font-[Poppins]"
          >
            Ir a la homepage
          </a>
        </div>
     </div>
    </section>
  </div>
  )
};

export default DiaDetail;
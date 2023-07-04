import plan from '../assests/plan.json'
import { Link } from 'react-router-dom';


const Land = () => {
  return (
    <div>
    <section class="bg-white">
    <div
      class="mx-auto max-w-screen-xl flex-wrap px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
    >
      <h1 className='justify-center text-3xl flex font-bold text-indigo-600 sm:text-3xl font-[Poppins] mt-0'>Plan de gimansio</h1>
      <h2 className='justify-center text-xl flex font-bold text-indigo-600 sm:text-xl font-[Poppins]'>Prof. Luca Lopensino</h2>
      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {plan.map((day, index) => {
          if(day.id)
          return (
          <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <Link to={`/detail/${day.id}`}>
              <div
                class="block rounded-xl border p-8 shadow-lg transition hover:border-pink-500/10 hover:shadow-pink-500/10  active:border-pink-500/10 active:shadow-pink-500/10"
                href=""
                >
                <div class="mx-auto max-w-lg text-center">
                  <h2 class="text-3xl font-bold sm:text-4xl  text-black font-[Poppins]">{`Día ${day.id}`}</h2>
                </div>
                <h2 class="mt-4 text-xl font-bold text-black font-[Poppins] mb-2">{day.name}</h2>
                <img
                  src={day.img && day.img}
                  className='max-w-48 max-h-48 content-center rounded-2xl ml-12'
                />
              </div>
            </Link>
          </div>
        )})}
        </div>
     </div>
    </section>
  </div>
  )
};

export default Land;
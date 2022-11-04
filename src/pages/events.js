import Nav from '../components/nav'
import Footer from '../components/footer'
import EventsHero from '../components/eventshero'

export default function Events() {
  return (
    <>
      <Nav />
      <EventsHero />

      <main class="bg-white">
        <div class="relative bg-slate-900">
            {/* <!-- Decorative image and overlay --> */}
            <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
                <img 
                    src="./table2.jpg" 
                    alt="" 
                    class="h-full w-full object-cover object-center"
                />
            </div>
            <div aria-hidden="true" class="absolute inset-0 bg-gray-800 opacity-70"></div>
            <div class="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
                <h1 class="text-4xl font-bold tracking-tight text-white lg:text-6xl">
                    Holiday wreaths are here
                </h1>
                <p class="mt-4 text-xl text-white">
                    Get your home and business ready for the holidays with our seasonal collection of wreaths. Made with love by your local San Antonio creatives
                </p>
                <a href="/store" class="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100">
                   Shop the collection 
                </a>
            </div>
        </div>
    </main>

      
      <Footer />
    </>
  )
}
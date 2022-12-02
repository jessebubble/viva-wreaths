import Nav from '../components/nav'
import Footer from '../components/footer'
import EventsHero from '../components/eventshero'
import Form from '../components/form'

export default function Events() {
  return (
    <>
      <Nav />
      <EventsHero />

      <main className="relative overflow-hidden bg-slate-900 pb-6 md:pb-20">
        {/* Decorative background image and gradient */}
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
            <img
              src="https://tailwindui.com/img/component-images/grid-blur-purple-on-black.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-slate-900 opacity-10"></div>
        </div>
        <section
          aria-labelledby="sale-heading"
          className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Can't make it to one of our events?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-xl text-gray-400">
              We can schedule a local delivery in San Antonio or ship your wreath to you.
              Use our form below to send us a message and we can start discussing your options.
            </p>
          </div>
        </section>
      </main>

      <Form />      
      <Footer />
    </>
  )
}
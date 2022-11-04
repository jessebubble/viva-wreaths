import Nav from '../components/nav'
import Form from '../components/form'
import Footer from '../components/footer'

export default function Contact() {
  return (
    <>
      <Nav />

      <main class="bg-white -mt-10 md:-mt-16 lg:-mt-24">
        {/* <!-- Header --> */}
        <div class="relative bg-black pb-32">
            <div class="absolute inset-0">
                <div class="absolute inset-0 bg-slate-500 mix-blend-multiply" aria-hidden="true"></div>
            </div>
            <div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 class="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Let's create something together</h1>
                <p class="mt-6 max-w-3xl text-xl text-amber-300">
                    Contact us
                </p>
            </div>
        </div>
        {/* <!-- Overlapping cards --> */}
        <section class="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
            <h2 class="sr-only" id="contact-heading">Contact us</h2>
            <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                <div class="flex flex-col rounded-2xl bg-white shadow-xl">
                    <div class="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                        <div class="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-amber-400 p-5 shadow-lg text-white">
                        {/*  <!-- Heroicon name: user-group --> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-medium text-gray-900">Collaborate</h3>
                    <p class="mt-4 text-base text-gray-600">
                        We are always looking for new opportunities to collaborate with other businesses. If you have a project you would like to discuss, please get in touch.
                    </p>
                </div>
                <div class="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                    <a href="/contact" class="text-base font-medium text-gray-500 hover:text-indigo-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
                </div>
            </div>
            <div class="flex flex-col rounded-2xl bg-white shadow-xl">
                <div class="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                    <div class="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-amber-400 p-5 shadow-lg text-white">
                        {/* <!-- Heroicon name: business-storefront --> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-medium text-gray-900">Commercial</h3>
                    <p class="mt-4 text-base text-gray-600">
                        We are always looking for new opportunities to collaborate with other businesses. If you have a project you would like to discuss, please get in touch.
                    </p>
                </div>
                <div class="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                    <a href="/contact" class="text-base font-medium text-gray-500 hover:text-indigo-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
                </div>
            </div>
            <div class="flex flex-col rounded-2xl bg-white shadow-xl">
                <div class="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                    <div class="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-amber-400 p-5 shadow-lg text-white">
                        {/* <!-- Heroicon name: rocket --> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-medium text-gray-900">Community</h3>
                    <p class="mt-4 text-base text-gray-600">
                        We are always looking for new opportunities to collaborate with other businesses. If you have a project you would like to discuss, please get in touch.
                    </p>
                </div>
                <div class="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                    <a href="/contact" class="text-base font-medium text-rose-500 hover:text-indigo-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
                </div>
            </div>
        </div>
        </section>
    </main>

    <Form />
    <Footer />
    </>
  )
}
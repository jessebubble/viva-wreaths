import Simple from "./nav"
import Form from "./form"
import Footer from "./footer"

export default function About() {
    return (
        <>
        <Simple />

        <main class="relative bg-white py-16 -mt-10 md:-mt-16 lg:-mt-20">
            <div class="absolute inset-x-0 top-0 hidden h-1/2 bg-white lg:block" aria-hidden="true"></div>
            <div class="mx-auto max-w-7xl bg-gray-50 lg:bg-transparent lg:px-8">
                <div class="lg:grid lg:grid-cols-12">
                    <div class="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                        <div class="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true"></div>
                        <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                            <div class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                                <img 
                                    class="rounded-3xl object-cover object-center shadow-2xl" 
                                    src="./table2.jpg" 
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div class="relative bg-slate-900 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                        <div class="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                            <svg class="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                                <defs>
                                <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" class="text-rose-50" fill="currentColor" />
                                </pattern>
                                </defs>
                                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                            </svg>
                            <svg class="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                                <defs>
                                <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" class="text-rose-50" fill="currentColor" />
                                </pattern>
                                </defs>
                                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                            </svg>
                        </div>
                        <div class="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                            <h2 class="text-3xl font-bold tracking-tight text-white" id="join-heading">
                                <span className='text-rose-500'>VIVA</span> WREATHS
                            </h2>
                            <p class="text-lg text-white lg:w-3/4">
                                We're a team of local creatives who create unique and beautiful wreaths for you to enjoy.
                                Our Holiday Collection 2022 is now available! Check out our new designs and order yours today. 

                            </p>
                            <a href="/" class="block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-gray-900 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto">
                                Shop the collection
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <main className="bg-slate-900">
            <div className="mx-auto max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
                <div>
                    <div className="border-b border-gray-200 pb-10">
                    <h2 className="font-medium text-yellow-400">Viva Wreaths</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">Made for every season</p>
                    </div>

                    <dl className="mt-10 space-y-10">
                    <div>
                        <dt className="text-sm font-medium text-yellow-400">Design</dt>
                        <dd className="mt-3 text-sm text-gray-400">
                        Inspiration for every season, every occasion, and every mood.
                        </dd>
                    </div>

                    <div>
                        <dt className="text-sm font-medium text-yellow-400">Materials</dt>
                        <dd className="mt-3 text-sm text-gray-400">
                        Made with love and care, using quality materials and sustainable practices.
                        </dd>
                    </div>

                    <div>
                        <dt className="text-sm font-medium text-yellow-400">What's included</dt>
                        <dd className="mt-3 text-sm text-gray-400">
                        Each wreath includes a coordinating ribbon and a hook for easy hanging.
                        </dd>
                    </div>

                    <div>
                        <dt className="text-sm font-medium text-yellow-400">Commercial</dt>
                        <dd className="mt-3 text-sm text-gray-400">
                        Viva Wreaths are available for commercial use. Need a custom wreath for your display? Contact us for more information.
                        </dd>
                    </div>
                    </dl>
                </div>

                <div>
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                    <img 
                        src="./wreath.jpg" 
                        alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system." 
                        className="h-full w-full object-cover object-center"
                    />
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                        <img 
                        src="./table2.jpg" 
                        alt="Detail of temperature setting button on kettle bass with digital degree readout." 
                        className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                        <img 
                        src="./table.jpg" 
                        alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug." 
                        className="h-full w-full object-cover object-center"
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </main>




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
                <div aria-hidden="true" class="absolute inset-0 bg-gray-900 opacity-50"></div>

                <div class="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
                <h1 class="text-4xl font-bold tracking-tight text-white lg:text-6xl">Holiday wreaths are here</h1>
                <p class="mt-4 text-xl text-white">
                    Get your home and business ready for the holidays with our seasonal collection of wreaths. Made with love by your local San Antonio creatives
                </p>
                <a href="/" class="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100">
                    Shop New Arrivals
                </a>
                </div>
            </div>
        </main>

        <main className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="rounded-3xl bg-slate-900 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
                <div className="lg:w-0 lg:flex-1">
                    <h2 className="text-3xl font-bold tracking-tight text-white">Sign up for our newsletter</h2>
                    <p className="mt-4 max-w-3xl text-lg text-gray-400">
                    Get exclusive early access to our upcoming collections.
                    </p>
                </div>
                <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                    <form className="sm:flex">
                    <label for="email-address" className="sr-only">Email address</label>
                    <input 
                        id="email-address" 
                        name="email-address" 
                        type="email" 
                        autocomplete="email" 
                        required className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700" 
                        placeholder="Enter your email"
                    />
                    <button type="submit" className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-sky-500 px-5 py-3 text-base font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                        Notify me
                    </button>
                    </form>
                </div>
                </div>
            </div>
        </main>

        <Form />

        <Footer />
        </>
    )
    }

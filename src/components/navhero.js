import Nav from '../components/nav'


export default function NavHero() {

    return (
        <>
        <Nav />

        <main className="relative bg-white mb-10 md:mb-32 lg:mb-36 md:-mt-24 lg:-mt-32 ">
            {/*  <!-- Background image and overlap --> */}
            <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
                <div className="relative w-full flex-1 bg-slate-900">
                    <div className="absolute inset-0 overflow-hidden">
                        <img 
                            src="https://tailwindui.com/img/component-images/grid-blur-purple-on-black.jpg" 
                            alt="grid blur purple on black" 
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="absolute inset-0 bg-slate-900 opacity-10"></div>
                </div>
                <div className="h-32 w-full bg-white md:h-40 lg:h-48"></div>
            </div>
            <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
                {/* <!-- Background image and overlap --> */}
                <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
                    <div className="relative w-full flex-1 bg-slate-900">
                        <div className="absolute inset-0 overflow-hidden">
                            <img 
                                src="https://tailwindui.com/img/component-images/grid-blur-purple-on-black.jpg" 
                                alt="grid blur purple on black" 
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="absolute inset-0 bg-slate-900 opacity-10"></div>
                    </div>
                    <div className="h-48 w-full bg-white"></div>
                </div>
                <div className="relative py-32">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl md:text-6xl">
                        VIVA Wreaths
                    </h1>
                    <p class="mt-4 text-xl text-slate-300">
                        Made locally in San Antonio, each Viva Wreath is made with love and designed to add life to every season you love
                        while also showcasing our love for the local community. 
                        See the VIVA difference today! 
                    </p>
                    <div className="mt-6">
                        <a href="/store" className="inline-block rounded-md border border-transparent bg-rose-600 py-3 px-8 font-medium text-white hover:bg-indigo-700">
                        Shop our Holiday Collection
                        </a>
                    </div>
                </div>
            </div>
            <section aria-labelledby="collection-heading" className="relative -mt-96 sm:mt-0">
                <h2 id="collection-heading" className="sr-only">Collections</h2>
                <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 sm:px-6 lg:gap-x-8 lg:px-8">
                    <div className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-w-4 sm:aspect-h-5 sm:h-auto">
                        <div>
                            <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-lg">
                                <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                                    <img 
                                        src="./santa.jpg" 
                                        alt="wreath" 
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-60"></div>
                            </div>
                            <div className="absolute inset-0 flex items-end rounded-lg p-6">
                                <div>
                                    <p aria-hidden="true" className="text-sm text-white">Shop the collection</p>
                                    <h3 className="mt-1 font-semibold text-white">
                                        <a href="/store">
                                            <span className="absolute inset-0"></span>
                                            Santa Claus
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-w-4 sm:aspect-h-5 sm:h-auto">
                        <div>
                            <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-lg">
                                <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                                    <img 
                                        src="./hohoho.jpg" 
                                        alt="wreath" 
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-60"></div>
                            </div>
                            <div className="absolute inset-0 flex items-end rounded-lg p-6">
                                <div>
                                    <p aria-hidden="true" className="text-sm text-white">Shop the collection</p>
                                    <h3 className="mt-1 font-semibold text-white">
                                        <a href="/store">
                                            <span className="absolute inset-0"></span>
                                            Ho Ho Ho
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-w-4 sm:aspect-h-5 sm:h-auto">
                        <div>
                            <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-lg">
                                <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                                    <img 
                                        src="./elf.jpg" 
                                        alt="wreath" 
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-60"></div>
                            </div>
                            <div className="absolute inset-0 flex items-end rounded-lg p-6">
                                <div>
                                    <p aria-hidden="true" className="text-sm text-white">Shop the collection</p>
                                    <h3 className="mt-1 font-semibold text-white">
                                        <a href="/store">
                                            <span className="absolute inset-0"></span>
                                            Holiday Elf
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}
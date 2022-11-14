import Nav from '../components/nav'


export default function NavHero() {

    return (
        <>
        <Nav />

        <main className="relative bg-white md:mb-10 md:-mt-24 lg:-mt-32 md:border-t md:border-white">
            {/*  <!-- Background image and overlap --> */}
            <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
                <div className="relative w-full flex-1 bg-slate-800">
                    <div className="absolute inset-0 overflow-hidden">
                        <img 
                        src="./store1.jpg" 
                        alt="christmas tree" 
                        className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="absolute inset-0 bg-slate-600 opacity-70"></div>
                </div>
                <div className="h-32 w-full bg-white md:h-40 lg:h-48"></div>
            </div>
            <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
                {/* <!-- Background image and overlap --> */}
                <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
                    <div className="relative w-full flex-1 bg-slate-800">
                        <div className="absolute inset-0 overflow-hidden">
                            <img 
                                src="./store1.jpg" 
                                alt="christmas tree" 
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="absolute inset-0 bg-slate-900 opacity-60"></div>
                    </div>
                    <div className="h-48 w-full bg-white"></div>
                </div>
                <div className="relative py-32">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                        Holiday Season 2022
                    </h1>
                    <p class="mt-4 text-xl text-white">
                        Viva Wreaths are a fun, unique and beautiful way to decorate your home or business. Made locally in San Antonio, we offer a variety of wreaths to suit your mood, style and love for the local community.
                    </p>
                    <div className="mt-4 sm:mt-6">
                        <a href="/store" className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 font-medium text-white hover:bg-indigo-700">
                        Shop Collection
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
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                            </div>
                            <div className="absolute inset-0 flex items-end rounded-lg p-6">
                                <div>
                                    <p aria-hidden="true" className="text-sm text-white">Shop the collection</p>
                                    <h3 className="mt-1 font-semibold text-white">
                                        <a href="/store">
                                            <span className="absolute inset-0"></span>
                                            Christmas
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
                                        src="./thanks.jpg" 
                                        alt="wreath" 
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                            </div>
                            <div className="absolute inset-0 flex items-end rounded-lg p-6">
                                <div>
                                    <p aria-hidden="true" className="text-sm text-white">Shop the collection</p>
                                    <h3 className="mt-1 font-semibold text-white">
                                        <a href="/store">
                                            <span className="absolute inset-0"></span>
                                            Thanksgiving
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
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                            </div>
                            <div className="absolute inset-0 flex items-end rounded-lg p-6">
                                <div>
                                    <p aria-hidden="true" className="text-sm text-white">Shop the collection</p>
                                    <h3 className="mt-1 font-semibold text-white">
                                        <a href="/store">
                                            <span className="absolute inset-0"></span>
                                            Happy Holidays
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
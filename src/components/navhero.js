import { ReactComponent as Banner} from '../banner.svg'
import { Menu, Transition } from '@headlessui/react';


export default function Nav() {
  return (
    <>
    <main className="relative overflow-hidden bg-white">
        <div className="hidden lg:absolute lg:inset-0 lg:block" aria-hidden="true">
            <svg className="absolute top-0 left-1/2 translate-x-64 -translate-y-8 transform" width="640" height="784" fill="none" viewBox="0 0 640 784">
                <defs>
                    <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" className="text-gray-900" fill="currentColor" />
                    </pattern>
                </defs>
                <rect y="72" width="640" height="640" className="text-slate-300/10" fill="currentColor" />
                <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
            </svg>
        </div>
        <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-28">
            <div>
                <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Global">
                    <div className="flex flex-1 items-center">
                        <div className="flex flex-col w-full items-center justify-between md:w-auto">
                            <a href="/">
                                <span className="sr-only">Viva Wreaths</span>
                                <Banner className='w-full h-full md:w-32 lg:w-36'/>
                            </a>
                            <div className="-mr-2 flex items-center md:hidden">
                                <Menu>
                                    <Menu.Button type="button" className="inline-flex items-center justify-center rounded-md border border-gray-900 bg-white p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900" aria-expanded="false">
                                        <span className="sr-only">Open main menu</span>
                                        {/*  <!-- Heroicon name: outline/bars-3 --> */}
                                        <svg className="h-6 w-6 text-gray-900 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    </Menu.Button>
                                    <Transition
                                        enter='transition ease-out duration-200'
                                        enterFrom='opacity-0 scale-95'
                                        enterTo='opacity-100 scale-100'
                                        leave='transition ease-in duration-75'
                                        leaveFrom='opacity-100 scale-100'
                                        leaveTo='opacity-0 scale-95'
                                    >
                                        <Menu.Items className="inline-flex flex-col items-start p-6 gap-1">
                                            <Menu.Item className='text-gray-500 font-medium'>
                                                {({ active }) => (
                                                    <a href="/contact" className={`${active && 'font-medium text-gray-500 hover:text-gray-900'}`}>Contact us</a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item className='text-sky-500 font-medium'>
                                                {({ active }) => (
                                                    <a href="/store" className={`${active && 'font-medium text-gray-500 hover:text-gray-900'}`}>Let's go shopping</a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                        <div className="hidden md:ml-10 md:block md:space-x-10">
                            <a href="/store" className="font-medium text-indigo-600 hover:text-gray-900">Viva Wreath Store</a>
                            <a href="/contact" className="font-medium text-gray-600 hover:text-gray-900">Contact Us</a>
                        </div>
                    </div>
                </nav>           
            </div>
        </div>
    </main>

    <main className="relative bg-white -mt-10 md:-mt-20">
        {/*  <!-- Background image and overlap --> */}
        <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
            <div className="relative w-full flex-1 bg-gray-800">
                <div className="absolute inset-0 overflow-hidden">
                    <img 
                    src="./background.jpg" 
                    alt="" 
                    className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
            </div>
            <div className="h-32 w-full bg-white md:h-40 lg:h-48"></div>
        </div>
        <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
            {/* <!-- Background image and overlap --> */}
            <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
                <div className="relative w-full flex-1 bg-gray-800">
                    <div className="absolute inset-0 overflow-hidden">
                        <img 
                            src="./background.jpg" 
                            alt="" 
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                </div>
                <div className="h-48 w-full bg-white"></div>
            </div>
            <div className="relative py-32">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                    Holiday Season 2022
                </h1>
                <p class="mt-4 text-xl text-white">
                    Get your home and business ready for the holidays with our seasonal collection of wreaths. Made with love by your local San Antonio creative.
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
                                    src="./halloween.jpg" 
                                    alt="Woman wearing an off-white cotton t-shirt." 
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
                                        Halloween
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
                                    src="./thanksgiving.jpg" 
                                    alt="Man wearing a charcoal gray cotton t-shirt." 
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
                                    src="./christmas.jpg" 
                                    alt="Person sitting at a wooden desk with paper note organizer, pencil and tablet." 
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
            </div>
        </section>
    </main>

    <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6 mb-10 md:mb-16 lg:mb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                <h1>
                    <span className="block text-base font-semibold text-rose-500 sm:text-lg lg:text-base xl:text-lg">VIVA WREATHS</span>
                    <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                    <span className="block text-gray-900">Your Home</span>
                    <span className="block text-gray-500">Your Business</span>
                    </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    VIVA Wreaths are a fun, unique and beautiful way to decorate your home or business. Made locally in San Antonio, we offer a variety of wreaths to suit your mood, style and love for the local community.
                </p>
                <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                    <p className="text-base font-medium text-gray-900">
                        Sign up to get notified when new designs are available.
                    </p>
                    <form action="#" method="POST" className="mt-3 sm:flex">
                        <label for="email" className="sr-only">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:flex-1" 
                            placeholder="Enter your email"
                        />
                        <button type="submit" className="mt-3 w-full rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center">
                            Notify me
                        </button>
                    </form>
                </div>
            </div>
            <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
                <svg className="absolute top-0 left-1/2 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784" aria-hidden="true">
                    <defs>
                        <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor" />
                    <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
                </svg>
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                    <button type="button" className="relative block w-full overflow-hidden rounded-lg bg-white">
                        <span className="sr-only">Watch our future video </span>
                        <img 
                            className="w-full" 
                            src='./thanksgiving.jpg' 
                            alt=""
                        />
                        {/* <span className="absolute inset-0 flex h-full w-full items-center justify-center" aria-hidden="true">
                            <svg className="h-20 w-20 text-indigo-500" fill="currentColor" viewBox="0 0 84 84">
                                <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                                <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                            </svg>
                        </span> */}
                    </button>
                </div>
            </div>
        </div>
    </main>

    <main className="bg-white">
        <div className="overflow-hidden pt-32 sm:pt-14">
            <div className="bg-slate-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative pt-48 pb-16 sm:pb-24">
                        <div>
                            <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                                <span className='text-rose-500'>VIVA</span> Wreaths
                                <br />
                                Holday collection 2022
                            </h2>
                            <div className="mt-6 text-base">
                                <a href="/store" className="font-semibold text-rose-500">
                                    Shop the collection <span aria-hidden="true"> &rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                            <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                                <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                    <div className="flex-shrink-0">
                                        <img 
                                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" 
                                            src="./christmas.jpg" 
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                                        <img 
                                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" 
                                            src="./background.jpg" 
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                    <div className="flex-shrink-0">
                                        <img 
                                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" 
                                            src="wreath.jpg" 
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                                        <img 
                                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" 
                                            src="./halloween.jpg" 
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                    <div className="flex-shrink-0">
                                        <img 
                                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" 
                                            src="./thanksgiving.jpg" 
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                                        <img 
                                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" 
                                            src="./table2.jpg" 
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}
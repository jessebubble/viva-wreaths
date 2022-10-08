import { ReactComponent as Banner} from '../banner.svg'       
        
export default function Simple() {   
    return (
        
        <main className="relative overflow-hidden bg-white">
            <div className="hidden lg:absolute lg:inset-0 lg:block" aria-hidden="true">
                <svg className="absolute top-0 left-1/2 translate-x-64 -translate-y-8 transform" width="640" height="784" fill="none" viewBox="0 0 640 784">
                    <defs>
                        <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-slate-900" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect y="72" width="640" height="640" className="text-white" fill="currentColor" />
                    <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
                </svg>
            </div>
            <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
                <div>
                    <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Global">
                        <div className="flex flex-1 items-center">
                            <div className="flex w-full items-center justify-between md:w-auto">
                                <a href="/">
                                    <span className="sr-only">Viva Wreaths</span>
                                    <Banner className='w-full h-full md:w-32 lg:w-36'/>
                                </a>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                        <span className="sr-only">Open main menu</span>
                                        {/*  <!-- Heroicon name: outline/bars-3 --> */}
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="hidden md:ml-10 md:block md:space-x-10">
                                <a href="/about" className="font-medium text-gray-500 hover:text-gray-900">About</a>
                                <a href="/contact" className="font-medium text-gray-500 hover:text-gray-900">Contact</a>
                                <a href="/store" className="font-medium text-rose-600 hover:text-gray-900">Store</a>
                            </div>
                        </div>
                        <div className="hidden text-right md:block">
                            <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                                <a href="/store" className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-rose-600 hover:bg-gray-50">
                                    Buy Now
                                </a>
                            </span>
                        </div>
                    </nav>
                </div>
            </div>
        </main>
    )
}
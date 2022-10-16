import { ReactComponent as Banner} from '../banner.svg'
import { Menu, Transition } from '@headlessui/react';
        
export default function Simple() {  

    return (
        <>
        <main className="relative overflow-hidden bg-black">
            <div className="hidden lg:absolute lg:inset-0 lg:block" aria-hidden="true">
                <svg className="absolute top-0 left-1/2 translate-x-64 -translate-y-8 transform" width="640" height="784" fill="none" viewBox="0 0 640 784">
                    <defs>
                        <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-white" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect y="72" width="640" height="640" className="text-black" fill="currentColor" />
                    <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
                </svg>
            </div>
            <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
                <div>
                    <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Global">
                        <div className="flex flex-1 items-center">
                            <div className="flex flex-col w-full items-center justify-between md:w-auto">
                                <a href="/">
                                    <span className="sr-only">Viva Wreaths</span>
                                    <Banner className='w-44 md:w-40 lg:w-36 h-full'/>
                                </a>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <Menu>
                                        <Menu.Button type="button" className="mt-6 inline-flex items-center justify-center rounded-md border border-gray-900 bg-white p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900" aria-expanded="false">
                                            <span className="sr-only">Open main menu</span>
                                            {/*  <!-- Heroicon name: outline/bars-3 --> */}
                                            <svg className="h-6 w-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
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
                                                <Menu.Item className='text-gray-100 font-medium'>
                                                    {({ active }) => (
                                                        <a href="/contact" className={`${active && 'font-medium hover:text-white'}`}>Contact us</a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item className='text-sky-500 font-medium'>
                                                    {({ active }) => (
                                                        <a href="/store" className={`${active && 'font-medium hover:text-white'}`}>Let's go shopping</a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                            <div className="hidden md:ml-10 md:block md:space-x-10">
                                <span className="inline-flex">
                                    <a href="/store" className="inline-flex items-center text-base tracking-tight antialiased font-medium text-indigo-600 hover:text-white hover:border-b-2 hover:border-indigo-400">
                                        Shop Collection
                                    </a>
                                </span>
                                <span className="inline-flex ">
                                    <a href="/contact" className="inline-flex items-center text-base tracking-tight antialiased font-medium text-gray-100 hover:text-white hover:border-b-2 hover:border-indigo-600">
                                        Contact Us
                                    </a>
                                </span>
                            </div>
                        </div>
                    </nav>           
                </div>
            </div>
        </main>
        </>
    )
}
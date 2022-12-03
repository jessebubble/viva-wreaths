import { ReactComponent as Logo} from '../viva.svg'
import { Menu, Transition } from '@headlessui/react';
        
export default function NavWhite() {  

    return (
        <>
        <main class="bg-white">  
            <div className="relative pt-3 pb-3 sm:pb-28">
                <div>
                    <div className="relative mx-auto flex max-w-7xl items-center px-4 sm:px-6" aria-label="Global">
                        <div className="flex flex-1 items-center justify-between">
                            <div className="flex flex-col w-full items-center md:w-auto">
                                <a href="/">
                                    <span className="sr-only">Viva Wreaths</span>
                                    <Logo className='w-44 md:w-48 lg:w-36 h-full'/>
                                </a>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <Menu>
                                        <Menu.Button type="button" className="inline-flex items-center justify-center rounded-md border border-gray-900 bg-white p-3 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900" aria-expanded="false">
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
                                                <Menu.Item className='text-fuchsia-500 font-medium'>
                                                    {({ active }) => (
                                                        <a href="/events" className={`${active && 'font-medium hover:text-sky-600'}`}>Market Days</a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item className='text-sky-500 font-medium'>
                                                    {({ active }) => (
                                                        <a href="/store" className={`${active && 'font-medium hover:text-white'}`}>Shop Collection</a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                            <div className="hidden md:ml-10 md:block md:space-x-10 ">
                                <span className="inline-flex ">
                                    <a href="/events" className="inline-flex items-center text-base tracking-tight antialiased font-medium text-sky-500 hover:text-gray-400 hover:border-b-2 hover:border-indigo-600">
                                        Market Days
                                    </a>
                                </span>
                                <span className="inline-flex">
                                    <a href="/store" className="inline-flex items-center text-base tracking-tight antialiased font-medium text-fuchsia-500 hover:text-gray-400 hover:border-b-2 hover:border-indigo-400">
                                        Shop Collection
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>           
                </div>
            </div>
        </main>
        </>
    );
}
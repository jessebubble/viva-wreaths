import { ReactComponent as Logo} from '../viva.svg'
import { Menu, Transition, Dialog } from '@headlessui/react';
import { Fragment, useState } from 'react';
        
export default function Nav() {  
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

   /*  function openModal() {
        setIsOpen(true);
    } */

    return (
        <>
    
        <main class="isolate bg-white md:bg-slate-800">
            <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                <defs>
                    <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9089FC"></stop>
                    <stop offset="1" stop-color="#FF80B5"></stop>
                    </linearGradient>
                </defs>
                </svg>
            </div>
            <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
                <div>
                    <nav className="relative mx-auto flex max-w-7xl items-center px-4 sm:px-6" aria-label="Global">
                        <div className="flex flex-1 items-center justify-between">
                            <div className="flex flex-col w-full items-center md:w-auto">
                                <a href="/">
                                    <span className="sr-only">Viva Wreaths</span>
                                    <Logo className='w-48 md:w-60 lg:w-32 h-full'/>
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
                                                <Menu.Item className='text-sky-600 font-medium'>
                                                    {({ active }) => (
                                                        <a href="/store" className={`${active && 'font-medium hover:text-white'}`}>Shop Collection</a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item className='text-gray-900 font-medium'>
                                                    {({ active }) => (
                                                        <a href="/events" className={`${active && 'font-medium hover:text-white'}`}>Market Days</a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                            <div className="hidden md:ml-10 md:block md:space-x-10 ">
                                <span className="inline-flex ">
                                    <a href="/events" className="inline-flex items-center text-base tracking-tight antialiased font-medium text-gray-100 hover:text-gray-400 hover:border-b-2 hover:border-indigo-600">
                                        Market Days
                                    </a>
                                </span>
                                <span className="inline-flex">
                                    <a href="/store" className="inline-flex items-center text-base tracking-tight antialiased font-medium text-indigo-500 hover:text-gray-400 hover:border-b-2 hover:border-indigo-400">
                                        Shop Collection
                                    </a>
                                </span>
                                <Transition appear show={isOpen} as={Fragment}>
                                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                                        </Transition.Child>

                                        <div className="fixed inset-0 overflow-y-auto">
                                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0 scale-95"
                                                    enterTo="opacity-100 scale-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100 scale-100"
                                                    leaveTo="opacity-0 scale-95">

                                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                        <Dialog.Title
                                                            as="h3"
                                                            className="text-lg font-medium leading-6 text-gray-900"
                                                            > Ready to checkout?
                                                        </Dialog.Title>
                                                        <div className="mt-2">
                                                            <p className="text-sm text-gray-500">
                                                                Viva Wreaths payment processing powered by Stripe
                                                            </p>
                                                        </div>
                                                        <div className="mt-4">
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                                onClick={closeModal}
                                                                > Continue to checkout
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                                                </svg>    
                                                            </button>
                                                        </div>
                                                    </Dialog.Panel>
                                                </Transition.Child>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition>
                            </div>
                        </div>
                    </nav>           
                </div>
            </div>
        </main>
        </>
    );
}
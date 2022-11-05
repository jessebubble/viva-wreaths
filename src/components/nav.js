import { ReactComponent as Banner} from '../banner.svg'
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
                                                        <a href="/store" className={`${active && 'font-medium hover:text-white'}`}>Shop Collection</a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item className='text-gray-100 font-medium'>
                                                    {({ active }) => (
                                                        <a href="/events" className={`${active && 'font-medium hover:text-white'}`}>Market Days</a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                            <div className="hidden md:ml-10 md:block md:space-x-10">
                                <span className="inline-flex ">
                                    <a href="/contact" className="inline-flex items-center text-base tracking-tight antialiased font-medium text-gray-100 hover:text-white hover:border-b-2 hover:border-indigo-600">
                                        Contact Us
                                    </a>
                                </span>
                                <span className="inline-flex ">
                                    <a href="/events" className="inline-flex items-center text-base tracking-tight antialiased font-medium text-gray-100 hover:text-white hover:border-b-2 hover:border-indigo-600">
                                        Market Days
                                    </a>
                                </span>
                                <span className="inline-flex">
                                    <a href="/store" className="inline-flex items-center text-base tracking-tight antialiased font-medium text-indigo-500 hover:text-white hover:border-b-2 hover:border-indigo-400">
                                        Shop Collection
                                    </a>
                                </span>
                                <div className="md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
                                    <button 
                                        type="button" 
                                        /* onClick={openModal} */
                                        class="inline-flex items-center gap-2 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        {/* <!-- Heroicon name: shopping-bag --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                            Shopping Cart
                                    </button>
                                </div>
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
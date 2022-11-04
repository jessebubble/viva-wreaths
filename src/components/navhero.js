import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Nav from '../components/nav'


export default function NavHero() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hxrxpdb', 'template_p9czz9g', form.current, 'Vg9DbywednMl26hQU')
            .then((result) => {
                    console.log(result.text);
                },(error) => {
                    console.log(error.text);
                });
                e.target.reset();
    };
  return (
    <>
    <Nav />

    <main className="relative bg-white mb-10 md:mb-16 lg:-mt-20">
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
                                    src="./wreath5.jpg" 
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
                                    <a href="/comingsoon">
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
                                    <a href="/comingsoon">
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

    <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                <h1>
                    <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                    <span className="block text-sky-500 "></span>
                    <span className="block text-gray-900">Adding some life to your home and business</span>
                    </span>
                </h1>
                <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Viva Wreaths are a fun, unique and beautiful way to decorate your home or business. Made locally in San Antonio, we offer a variety of wreaths to suit your mood, style and love for the local community.
                </p>
                <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                    <p className="text-base font-medium text-gray-900">
                        Sign up to get notified when new designs are available.
                    </p>
                    <form ref={form} onSubmit={sendEmail} action="#" method="POST" className="mt-3 sm:flex">
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
                            src='./table3.jpg' 
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
    </>
  )
}
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Simple from './nav'
import Footer from './footer'
import sanityClient from '../client.js'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
    return builder.image(source)
}

export default function Store() {
    const [allProduct, setProduct] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "product"]{
            name,
            slug,
            price,
            description,
            image
        }`
            )
            .then((data) => setProduct(data))
            .catch(console.error);
    }, []);

    return (
    <>
    <Simple />

    <main class="bg-white -mt-10 md:-mt-16 lg:-mt-20">
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
                <h1 class="text-4xl font-bold tracking-tight text-white lg:text-6xl">
                    Holiday wreaths are here
                </h1>
                <p class="mt-4 text-xl text-white">
                    Get your home and business ready for the holidays with our seasonal collection of wreaths. Made with love by your local San Antonio creatives
                </p>
                <a href="/store" class="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100">
                    View our collection below 
                </a>
            </div>
        </div>
    </main>

    <main className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                {allProduct && allProduct.map((product) => ( 
                    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                        <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                            <img 
                                src={urlFor(product.image).type === 'image' ? urlFor(product.image).url() : urlFor(product.image[0]).url()}
                                alt={product.name} 
                                className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                            />
                        </div>
                        <div className="flex flex-1 flex-col space-y-2 p-4">
                            <h3 className="text-sm font-medium text-gray-900">
                                <Link to='/'>
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                {product.name}
                                </Link>
                            </h3>
                            <p className="text-sm text-gray-500">{product.description}</p>
                            <div className="flex flex-1 flex-col justify-end">
                                <p className="text-base font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                        <div class="mt-6">
                            <a 
                                href="/checkout" 
                                class="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200">
                                    Add to cart <span class="sr-only">, Wreaths</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </main>

    <main className="bg-slate-100">
        <div className="mx-auto max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
                <div>
                    <div className="border-b border-gray-300 pb-10">
                        <h2 className="font-medium text-fuchsia-500">Viva Wreaths</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Made for every season</p>
                    </div>

                    <dl className="mt-10 space-y-10">
                    <div>
                        <dt className="text-sm font-medium text-fuchsia-500">Design</dt>
                        <dd className="mt-3 text-sm text-gray-500">
                        Inspiration for every season, every occasion, and every mood.
                        Viva Wreaths are made to bring joy to your home and to the people you love.
                        </dd>
                    </div>

                    <div>
                        <dt className="text-sm font-medium text-fuchsia-500">Materials</dt>
                        <dd className="mt-3 text-sm text-gray-500">
                        Made with love and care, using quality materials and sustainable practices.
                        We use only the best materials to ensure your wreath will last for years to come.
                        </dd>
                    </div>

                    <div>
                        <dt className="text-sm font-medium text-fuchsia-500">What's included</dt>
                        <dd className="mt-3 text-sm text-gray-500">
                        Each wreath includes a coordinating ribbon and a hook for easy hanging.
                        Everything you need to bring joy to your home.
                        </dd>
                    </div>

                    <div>
                        <dt className="text-sm font-medium text-fuchsia-500">Commercial</dt>
                        <dd className="mt-3 text-sm text-gray-500">
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

    <main class="bg-white -mt-10 md:-mt-16 lg:-mt-20">
        {/* <!-- Header --> */}
        <div class="relative bg-gray-800 pb-32">
            <div class="absolute inset-0">
                <img 
                    class="h-full w-full object-cover" 
                    src="./christmas.jpg" 
                    alt=""
                />
                <div class="absolute inset-0 bg-slate-600 mix-blend-multiply" aria-hidden="true"></div>
            </div>
            <div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 class="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Contact us</h1>
                <p class="mt-6 max-w-3xl text-xl text-sky-400">
                    Let's create something together.
                </p>
            </div>
        </div>
        {/* <!-- Overlapping cards --> */}
        <section class="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
            <h2 class="sr-only" id="contact-heading">Contact us</h2>
            <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                <div class="flex flex-col rounded-2xl bg-white shadow-xl">
                    <div class="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                        <div class="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-sky-400 p-5 shadow-lg">
                            {/*  <!-- Heroicon name: outline/phone --> */}
                            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>  
                        </div>
                        <h3 class="text-xl font-medium text-gray-900">Collaborate</h3>
                        <p class="mt-4 text-base text-gray-500">
                            We are always looking for new opportunities to collaborate with other businesses. If you have a project you would like to discuss, please get in touch.
                        </p>
                    </div>
                    <div class="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                        <a href="/contact" class="text-base font-medium text-rose-500 hover:text-indigo-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
                    </div>
                </div>
                <div class="flex flex-col rounded-2xl bg-white shadow-xl">
                    <div class="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                        <div class="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-sky-400 p-5 shadow-lg">
                            {/* <!-- Heroicon name: outline/lifebuoy --> */}
                            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-medium text-gray-900">Commercial</h3>
                        <p class="mt-4 text-base text-gray-500">
                            We are always looking for new opportunities to collaborate with other businesses. If you have a project you would like to discuss, please get in touch.
                        </p>
                    </div>
                    <div class="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                        <a href="/contact" class="text-base font-medium text-rose-500 hover:text-indigo-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
                    </div>
                </div>
                <div class="flex flex-col rounded-2xl bg-white shadow-xl">
                    <div class="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                        <div class="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-sky-400 p-5 shadow-lg">
                            {/* <!-- Heroicon name: outline/newspaper --> */}
                            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-medium text-gray-900">Community</h3>
                        <p class="mt-4 text-base text-gray-500">
                            We are always looking for new opportunities to collaborate with other businesses. If you have a project you would like to discuss, please get in touch.
                        </p>
                    </div>
                    <div class="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                        <a href="/contact" class="text-base font-medium text-rose-500 hover:text-indigo-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <Footer />
    </>
  );
}
import sanityClient from '../client.js'
import imageUrlBuilder from '@sanity/image-url'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/nav'
import Footer from '../components/footer'
import Testimonial from '../components/testimonial.js';
import Form from '../components/form.js';

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
    <Nav />

    <main className="relative bg-white md:-mt-32 md:border-t md:border-white">
        {/*  <!-- Background image and overlap --> */}
        <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
            <div className="relative w-full flex-1 bg-slate-800">
                <div className="absolute inset-0 overflow-hidden">
                    <img 
                    src="./store1.jpg" 
                    alt="gradient background" 
                    className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="absolute inset-0 bg-slate-900 opacity-80"></div>
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
                            alt="gradient background" 
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="absolute inset-0 bg-slate-900 opacity-60"></div>
                </div>
                <div className="h-48 w-full bg-white"></div>
            </div>
            <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 -mb-40 md:-mb-36">
                <div className="relative py-32">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                        <span className="block">Holiday Collection 2022</span>
                    </h2>
                    <p className="mt-4 text-xl text-gray-400">
                        <span className="block">
                            Get your home and business ready for the holidays with our seasonal collection of wreaths. Made with love locally in San Antonio.                      
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 -mt-40 md:-mt-0">
                {allProduct && allProduct.map((product) => ( 
                    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                        <div className="aspect-w-3 aspect-h-3 bg-gray-200 group-hover:opacity-75 sm:aspect-1 sm:h-80">
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
                            {/* <div className="flex flex-1 flex-col justify-end">
                                <p className="text-base font-medium text-gray-900">{product.price}</p>
                            </div> */}
                        </div>

                        {/* <div class="mt-6">
                            <a href="/checkout" className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200">
                                Add to cart <span class="sr-only">, Wreaths</span>
                            </a>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    </main>

    <Testimonial />
    <Form />
    <Footer />
    </>
  );
}
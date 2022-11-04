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
    <Testimonial />

    <main className="bg-slate-100 ">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
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

    <Form />
    <Footer />
    </>
  );
}
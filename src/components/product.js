import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import Simple from './nav'
import Footer from './footer'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function Product() {
    const [productData, setProductData] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
            .fetch(
                `*[type == "product" && slug.current == "${slug}"]{
            name,
            slug,
            price,
            description,
            image
            }
        }`,
        { slug }
            )
            .then((data) => setProductData(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!productData) return <div>Loading...</div>;

  return (
    <>
    <Simple />

    <main className="relative bg-slate-900 py-16 sm:py-24">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8 lg:pt-6 lg:pb-6">
                <div className="relative sm:py-16 lg:py-0">
                    <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                        <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-slate-100 lg:right-72"></div>
                        <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                            <defs>
                                <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                        </svg>
                    </div>
                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                        {/* <!-- blog image card--> */}
                        <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                            <img 
                                className="absolute inset-0 h-full w-full object-cover" 
                                src={urlFor(productData.image).url()}
                                alt={productData.name}
                            />
                            <div className="absolute inset-0 bg-indigo-50 mix-blend-multiply"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-800 via-indigo-800 opacity-75"></div>
                            <div className="relative px-8">
                                <blockquote className="mt-8">
                                    <div className="relative text-lg font-medium text-white md:flex-grow">
                                        {/* <svg className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                        </svg> */}
                                        <p className="relative">
                                        </p>
                                    </div>
                                    <footer className="mt-4">
                                        <p className="text-base font-semibold text-indigo-200">Store | Viva Wreaths</p>
                                        <a href='/store' className=''>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-400 hover:text-yellow-100 mt-1 md:mt-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                            </svg>
                                        </a>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                    {/* <!-- blog content area --> */}
                    <div className="pt-12 sm:pt-16 lg:pt-20">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            <span className="block">{productData.name}</span>    
                        </h2>
                        <div className="mt-6 space-y-6 text-gray-500">
                            <p className="text-base leading-7">
                                <BlockContent
                                    blocks={productData.description}
                                    projectId="ypl2yc17"
                                    dataset="production"
                                />    
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    <Footer />
    </>
  )
}
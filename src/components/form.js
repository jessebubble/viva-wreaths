import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiInstagram, FiFacebook, FiMail } from "react-icons/fi";
import { ReactComponent as Banner} from '../banner.svg'


export default function Form() {
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
        <main className="relative bg-black pb-6 md:pb-10 md:pt-10 pt-6">
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-black"></div>
            </div>
            <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                <div className="bg-black rounded py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div className="mx-auto max-w-lg">
                        <h2 className="text-2xl font-bold tracking-tight text-fuchsia-600 sm:text-3xl">Let's Connect</h2>
                        <p className="mt-3 text-lg leading-6 text-gray-500">
                            We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
                        </p>
                        <dl className="mt-8 text-base text-emerald-400">
                            <div className="mt-6">
                                <dt className="sr-only">Email</dt>
                                <dd className="flex">
                                    <FiMail className='h-6 w-6 text-slate-100' />
                                    <span className="ml-3">info@vivawreaths.com</span>
                                </dd>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Social</dt>
                                <a href='https://www.instagram.com/viva_wreaths/'>
                                    <dd className="flex">
                                        <FiInstagram className='h-6 w-6 text-slate-100' />
                                        <span className="ml-3">@viva_wreaths</span>
                                    </dd>
                                </a>
                            </div>
                            <div className="mt-3">
                                <dt className="sr-only">Social</dt>
                                <a href='https://www.facebook.com/profile.php?id=100086647804720'>
                                    <dd className="flex">
                                        <FiFacebook className='h-6 w-6 text-slate-100' />
                                        <span className="ml-3">@viva_wreaths</span>
                                    </dd>
                                </a>
                            </div>
                            <div className="mt-6">
                            <dt className="sr-only">Social</dt>
                            <dd className="flex">
                                <Banner className='w-44 md:w-40 lg:w-36 h-full'/>
                                <span className="ml-3"></span>
                            </dd>
                        </div>
                        </dl>
                    </div>
                </div>
                <div className="bg-black rounded py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                    <div className="mx-auto max-w-lg lg:max-w-none">
                        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-300 shadow-sm focus:border-fuchsia-600 focus:ring-fuchsia-600" 
                                    placeholder="Full name"
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className="sr-only">Email</label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    id="email" 
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-300 shadow-sm focus:border-fuchsia-600 focus:ring-fuchsia-600" 
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label htmlFor='phone' className="sr-only">Phone</label>
                                <input 
                                    type="text" 
                                    name="phone" 
                                    id="phone" 
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-300 shadow-sm focus:border-fuchsia-600 focus:ring-fuchsia-600" 
                                    placeholder="Phone"
                                />
                            </div>
                            <div>
                                <label htmlFor='message' className="sr-only">Message</label>
                                <textarea 
                                    type="text"
                                    name="message" 
                                    id="message" 
                                    rows="4" 
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-300 shadow-sm focus:border-fuchsia-600 focus:ring-fuchsia-600" placeholder="Message">
                                </textarea>
                            </div>
                            <div>
                                <button type="submit" id="button" className="inline-flex justify-center rounded-md border border-transparent bg-fuchsia-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>

    )
}
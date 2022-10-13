import Nav from "./components/navhero";
import Footer from "./components/footer";
import Form from "./components/form";

export default function App() {
  return (
    <>
    <Nav />

    <main className="bg-white pt-16 lg:py-24">
      <div className="bg-sky-500 pb-16 lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-8">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"></div>
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
              <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img 
                  className="object-cover lg:h-full lg:w-full" 
                  src="./temp.jpg" 
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              <blockquote>
                <div>
                  <svg className="h-12 w-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-2xl font-medium text-white">
                    We love our history and are excited to share a piece of our culture with you through our wreaths. We're proud to be a part of the community and look forward to sharing our passion with you.
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-white">Yuliana Hernandez</p>
                  <p className="text-base font-medium text-indigo-100">Owner | Creative @vivawreaths </p>
                </footer>
              </blockquote>
            </div>
          </div>
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

    <main class="relative bg-white py-16">
      <div class="absolute inset-x-0 top-0 hidden h-1/2 bg-white lg:block" aria-hidden="true"></div>
      <div class="mx-auto max-w-7xl bg-gray-50 lg:bg-transparent lg:px-8">
          <div class="lg:grid lg:grid-cols-12">
              <div class="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                  <div class="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true"></div>
                  <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                      <div class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                          <img 
                              class="rounded-3xl object-cover object-center shadow-2xl" 
                              src="./table2.jpg" 
                              alt=""
                          />
                      </div>
                  </div>
              </div>
              <div class="relative bg-slate-900 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                  <div class="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                      <svg class="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                          <defs>
                          <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                              <rect x="0" y="0" width="4" height="4" class="text-rose-50" fill="currentColor" />
                          </pattern>
                          </defs>
                          <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                      </svg>
                      <svg class="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                          <defs>
                          <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                              <rect x="0" y="0" width="4" height="4" class="text-rose-50" fill="currentColor" />
                          </pattern>
                          </defs>
                          <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                      </svg>
                  </div>
                  <div class="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                      <h2 class="text-3xl font-bold tracking-tight text-white" id="join-heading">
                          <span className='text-rose-500'>VIVA</span> WREATHS
                      </h2>
                      <p class="text-lg text-white lg:w-3/4">
                          We're a team of local creatives who create unique and beautiful wreaths for you to enjoy.
                          Our Holiday Collection 2022 is now available! Check out our new designs and order yours today. 

                      </p>
                      <a href="/store" class="block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-gray-900 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto">
                          Shop the collection
                      </a>
                  </div>
              </div>
          </div>
      </div>
    </main>

    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="rounded-3xl bg-amber-400 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white">Sign up for our newsletter</h2>
            <p className="mt-4 max-w-3xl text-lg text-gray-900">
              Get exclusive early access to our upcoming collections.
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <form className="sm:flex">
              <label for="email-address" className="sr-only">Email address</label>
              <input 
                id="email-address" 
                name="email-address" 
                type="email" 
                autocomplete="email" 
                required className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700" 
                placeholder="Enter your email"
              />
              <button type="submit" className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-5 py-3 text-base font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                Notify me
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>

    <Form />
    <Footer />
    </>
  );
}

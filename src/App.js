import Nav from "./components/navhero";
import Footer from "./components/footer";

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

    <main className="relative bg-white">
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
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
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
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          </div>
          <div className="h-48 w-full bg-white"></div>
        </div>
        <div className="relative py-32">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Holiday Season 2022
          </h1>
          <div className="mt-4 sm:mt-6">
            <a href="/" className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 font-medium text-white hover:bg-indigo-700">
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
                    src="./halloween.jpg" 
                    alt="Woman wearing an off-white cotton t-shirt." 
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              </div>
              <div className="absolute inset-0 flex items-end rounded-lg p-6">
                <div>
                  <p aria-hidden="true" className="text-sm text-white">Shop the collection</p>
                  <h3 className="mt-1 font-semibold text-white">
                    <a href="/">
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
                    alt="Man wearing a charcoal gray cotton t-shirt." 
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              </div>
              <div className="absolute inset-0 flex items-end rounded-lg p-6">
                <div>
                  <p aria-hidden="true" className="text-sm text-white">Shop the collection</p>
                  <h3 className="mt-1 font-semibold text-white">
                    <a href="/">
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
                    alt="Person sitting at a wooden desk with paper note organizer, pencil and tablet." 
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              </div>
              <div className="absolute inset-0 flex items-end rounded-lg p-6">
                <div>
                  <p aria-hidden="true" className="text-sm text-white">Shop the collection</p>
                  <h3 className="mt-1 font-semibold text-white">
                    <a href="/">
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

    <Footer />
    </>
  );
}

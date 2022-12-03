
export default function MarketDay() {
    return (

    <main className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <img src="./market-bg.png" alt="" className="w-full h-full object-cover object-center"/>
          </div>
          <div className="relative bg-purple-900 bg-opacity-80 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block sm:inline">Market Days</span>
              </h2>
              <p className="mt-3 text-xl text-white">
                We love being part of the local art and craft community. 
                Click the button below for our market day schedule and find us at a local market near you!
              </p>
              <a href="/events" className="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">
                See our market day schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

    )
}
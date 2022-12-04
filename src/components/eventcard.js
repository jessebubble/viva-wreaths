export default function EventCard() {
    return (
        <main className="relative mt-6 md:-mt-16 mb-2 md:mb-10">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                    <div className="absolute inset-0">
                        <img
                            className="h-full w-full object-cover object-center"
                            src="./event-bg.png"
                            alt="day of the dead graphics"
                        />
                        <div className="absolute inset-0 bg-amber-600 mix-blend-multiply" />
                    </div>
                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block text-white">VIVA Wreaths</span>
                            <span className="block text-indigo-200">Market Days</span>
                        </h1>
                        <a href="/events">
                            <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                                Shop Local 
                            </p>
                        </a>
                    </div>
                </div>
            </div>
      </main>
    )
}
import { Player } from '@lottiefiles/react-lottie-player';
import Simple from './nav'
import Footer from './footer'

export default function Store() {
  return (
    <>
    <Simple />

    <main className="relative py-16 bg-slate-900 -mt-10">
        <div className="mx-auto max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative z-10 text-center -mt-10 md:-mt-16 lg:-mt-20">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Store Opening Soon</h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-slate-200 sm:mt-4">We'll have a variety of products for you to choose from.</p>
            </div>
            <div className=''> 
                <Player
                    src='https://assets2.lottiefiles.com/packages/lf20_hmaqpnrt.json'
                    className='w-4/12'
                    background='transparent'
                    loop={true}
                    autoplay={true} >
                </Player>
            </div>
        </div>
    </main>

    <Footer />
    </>
  )
}
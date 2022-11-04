import Nav from '../components/nav';
import Footer from '../components/footer';
import { Player } from '@lottiefiles/react-lottie-player';

export default function ComingSoon() {
    return (
        <>
        <Nav />

        <main className='bg-black -mt-10 md:-mt-16'>
            <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
                <div className='lg:text-center'>
                    <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>Coming soon</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
                        We're working on something great
                    </p>
                    <div className='mt-10'>
                        <Player
                            src='https://assets5.lottiefiles.com/packages/lf20_kLPkkRF0BT.json'
                            className='md:w-32 w-16'
                            background='transparent'
                            loop={true}
                            autoplay={true} >
                        </Player>

                    </div>
                </div>
            </div>      
        </main>
        
        <Footer />
        </>
    );
}
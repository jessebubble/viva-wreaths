import NavWhite from '../components/navwhite'
import Footer from '../components/footer'
import Form from '../components/form.js';
import StoreHero from '../components/storehero';
import StoreCard from '../components/storecard';
import EventCard from '../components/eventcard';

export default function Store() {

    return (
    <>
    <NavWhite />
    <StoreCard />
    <StoreHero />
    <EventCard />
    <Form />
    <Footer />
    </>
  );
}
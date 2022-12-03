import NavWhite from '../components/navwhite'
import Footer from '../components/footer'
import EventsHero from '../components/eventshero'
import Form from '../components/form'
import MissedEvent from '../components/missedevent'
import EventCard from '../components/eventcard'
import StoreCard from '../components/storecard'

export default function Events() {
  return (
    <>
      <NavWhite />
      <EventCard />
      <EventsHero />
      <StoreCard />
      <MissedEvent />
      <Form />      
      <Footer />
    </>
  )
}
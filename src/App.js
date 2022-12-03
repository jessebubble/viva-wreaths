import NavHero from "./components/navhero";
import Footer from "./components/footer";
import Form from "./components/form";
import StoreCard from "./components/storecard";
import EventCard from "./components/eventcard";

export default function App() {
  return (
    <>
    <NavHero />
    <StoreCard />
    <EventCard />
    <Form />
    <Footer />
    </>
  );
}
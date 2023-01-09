import {Reviews} from '../Components/Reviews/Reviews'
import { Header } from '../Components/Header/Header';
import { Footer } from '../Components/Footer/Footer';
import '../App.css'

export const Home = () => {
  // create a function inside reviews that pushes up a random artist for the carousel
  //use a function that extracts the artist name and match it with the logo for the banner
  return (
    <>
      <Header />
      <div className='container'>
        <Reviews />
      </div>
      <Footer />
    </>
  );
}

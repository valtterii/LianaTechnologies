import './App.css';
import './responsiveness.css'
// Components
import Topbar from './components/topbar';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Album from './components/album';
import Statistics from './components/statistics';
import News from './components/news';
import References from './components/references';
import Newsletter from './components/newsletter';
import Footer from './components/footer';
// Images
import bannerImage from './images/banner.png';
import companyImage from './images/image1.png';
import productsImage from './images/image2.png';
import contactusImage from './images/image3.png';
// Icons
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
// Animations
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    duration: 1000,
  });
  /* 
  
  TODO:
  another page: newsletter thank you page
  FOOTER responsiveness <<<
  better mobile navbar <<<
  
  */
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Banner image={bannerImage} />
      <section data-aos="zoom-in-up" data-aos-mirror="true" data-aos-once="false">
        <Album image1={companyImage} image2={productsImage} image3={contactusImage} />
        <Statistics icon1={icon1} icon2={icon2} icon3={icon3} />
      </section>
      <News />
      <References />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

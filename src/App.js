import './App.css';
import './responsiveness.css'
import { Topbar, Navbar, Banner, Album, Statistics, News, References, Newsletter, Footer, bannerImage, companyImage, productsImage, contactUsImage, icon1, icon2, icon3 } from './components'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    duration: 1000,
  });

  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Banner image={bannerImage} />
      <section data-aos="zoom-in-up" data-aos-mirror="true" data-aos-once="false">
        <Album image1={companyImage} image2={productsImage} image3={contactUsImage} />
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

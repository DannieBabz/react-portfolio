import './App.css'
import Header from './Header'
import Home from './Home'
import About from "./About"
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import {GoMoveToTop} from "react-icons/go"
import {useState, useEffect} from "react"



function App() {
  
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className='pt-5 pl-5 bg-bgcolor h-fit md:pt-10 md:pl-[4rem] lg:pb-0 relative' id='home'>
        <Header/>
        <Home />
      </section>
 
      <section className="h-[160vh] pb-60 lg:h-[120vh] bg-txtColor m-auto lg:pb-64" id='about'>
        <About />
      </section>

      <section className='w-[100%] h-fit bg-[#EB5160] relative m-auto' id='projects'>
        <Projects />
      </section>
      <section className='flex flex-col m-auto px-5 pb-36 w-[100%] h-fit bg-secColor relative lg:flex-row' id='contact'>
        <Contact />
      </section>
      <section className="bg-bgcolor h-fit py-20 w-[100%] m-auto text-center text-secColor relative">
        <Footer/>
        <p className='text-xl mt-10'>&copy; Daniel Babatunde 2023</p>
        <a href='#home' id='toTop' className={`${isVisible ? 'inline' : 'hidden'}`} onClick={scrollToTop}><GoMoveToTop className='w-[5rem] h-[5rem] rounded-3xl bg-secColor fixed shadow-xl right-16 bottom-16 z-50 p-5'/></a>
      </section>
 
      

    </>
  )
}

export default App;

import { RxHamburgerMenu } from 'react-icons/rx';
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { useState, useEffect } from "react";






const Header = () => {
  const [navBar, setNavBar] = useState(true);
 
  const handleMenuClick = () => {
    const menu = document.getElementById("hamburgerContainer");
    const mobNav = document.getElementById("mobNav");

    if (menu && mobNav) {
      if (navBar) {
        menu.classList.remove("translate-x-full");
        mobNav.classList.remove("translate-x-full");
      } else {
        menu.classList.add("translate-x-full");
        mobNav.classList.add("translate-x-full");
      }
    }

    setNavBar(!navBar);
  };
 useEffect(() => {
    // This code runs when the component mounts
    // You can perform any setup or initialization here
    const menu = document.getElementById("hamburgerContainer");

    if (menu) {
      menu.addEventListener("click", handleMenuClick);

      // Return a cleanup function to remove the event listener when the component unmounts
      return () => {
        menu.removeEventListener("click", handleMenuClick);
      };
    }
  }, []); // Empty dependency array to run this effect only on mount



  return ( 
        <header className='flex justify-between md:flex md:justify-between relative'>
          <nav className='flex justify-between text-txtColor font-dosis fixed bg-bgcolor w-[100%] px-10 pt-5 pb-10 h-10 lg:h-20 right-0 top-0 m-auto lg:pt-10 lg:pb-20 z-50'>
          <h1 className='lg:ml-36'><code className='text-txtColor md:text-3xl'>&lt;Daniel &frasl;&gt;</code><br /></h1>
            <div>
              <ul className="hidden md:items-center md:text-lg lg:flex">
                <li className="mx-12 px-5 align-middle pb-3 hover:border-b-primary hover:border-b-2 hover:transition hover:ease-in-out hover:delay-1000"><a href='#about'>ABOUT</a></li>
                <li className="mx-12 px-5 align-middle pb-3 hover:border-b-primary hover:border-b-2 hover:transition hover:ease-in-out hover:delay-1000"><a href="#projects">PROJECTS</a></li>
                <li className="mx-12 px-5 align-middle pb-3 hover:border-b-primary hover:border-b-2 hover:transition hover:ease-in-out hover:delay-1000"><a href="#contact">CONTACT</a></li>
                <li ><a href='./Resume(1).pdf' download='Babatunde Similoluwa Resume' className="justify-between mx-20 bg-btnColor text-bgcolor border px-5 py-2 rounded hover:transition-all hover:bg-[#ff818e]">RESUME</a></li>
            </ul>
            </div>
            <RxHamburgerMenu id="hamBtn" className='w-6 h-6 mr-6 flex text-secColor justify-between fixed top-5 right-5 z-50 lg:hidden' onClick={handleMenuClick}/>
            <div id='hamburgerContainer' className='top-0 h-[105vh] left-0 bg-btnColor ease-in-out duration-500 transform transition-transform translate-x-full flex fixed md:right-0'>
            <div id='mobNav' className="m-auto top-0 w-full h-full z-10 flex-col translate-x-full space-y-20 lg:hidden">
              <ul className="lg:hidden px-40 py-10 space-y-10 z-50 text-bgcolor">
                  <li className="border-b-2 border-b-primary py-5 text-center px-5" data-aos="fade-in" data-aos-duration="500" ><a href='#about'>ABOUT</a></li>
                  <li className="border-b-2 border-b-primary py-5 text-center px-5" data-aos="fade-in" data-aos-duration="500" ><a href="#projects">PROJECTS</a></li>
                  <li className="border-b-2 border-b-primary py-5 text-center px-5" data-aos="fade-in" data-aos-duration="500" ><a href="#contact">CONTACT</a></li>
                  <li className="border-b-2 border-b-primary py-5 text-center px-5" data-aos="fade-in" data-aos-duration="500" ><a href='./Resume(1).pdf' download='Babatunde Similoluwa Resume' >RESUME</a></li>
              </ul>
              <div className='flex flex-col m-auto space-y-8'>
              <h1 className='text-secColor space-x-6 m-auto text-3xl'>SAY HELLO!</h1><br />
              <div className='text-secColor flex space-x-6 m-auto'>
                <a href="http://github.com/DannieBabz"><AiFillGithub className="w-8 h-8"/></a>
                <a href="http://twitter.com/DannieBabz"><AiFillTwitterCircle className="w-8 h-8"/></a>
                <a href="http://linkedin.com/DannieBabz"><AiFillLinkedin className="w-8 h-8"/></a>
                <a href="http://gmail.com/DannieBabz"><AiFillMail className="w-8 h-8"/></a>
              </div>
              </div>
                
            </div>
            </div>
            
          </nav>
        </header>
     );
}
 
export default Header;
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";


const Home = () => {
    return ( 
        <>
            <div className="flex flex-col justify-between mt-20 md:mt-60 md:flex-row text-primary">
                <div className="w-30 leading-10 md:w-[50rem]" data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine">
                    <h1 className="text-xl text-center font-tillana md:text-5xl md:text-justify">Hi! My Name is</h1>
                    <p className="font-raleway text-center text-3xl md:text-5xl md:mt-5 md:text-justify md:mb-10 text-btnColor">BABATUNDE DANIEL</p>
                    <p className="text-sm md:text-lg text-center text-txtColor md:text-justify" >Web Developer | Creative Designer | Problem Solver</p><br />
                    <p className="leading-6 w-[21rem] mr-auto justify-center text-justify text-[16px] md:text-[18px] lg:w-[50rem] md:text-justify">I&apos;m passionate about creating beautiful and functional web solutions that leave a lasting impact. With a blend of creativity and technical expertise, I bring ideas to life in the digital world.</p>
                    
                </div>
                <div className="m-auto" data-aos="zoom-in">
                    <img src="/20231213_151059-removebg.png" alt="Me" className="w-[35rem] h-[35rem]" />
                </div>
                <div className="socials text-bgcolor my-auto ml-[98rem] mt-10 fixed z-50 lg:flex" data-aos="fade-up-right">
                <div className='bg-btnColor w-10 h-48 rounded-full flex flex-col justify-around items-center' >
                <a href="http://github.com/DannieBabz"><AiFillGithub className="w-8 h-8"/></a>
                <a href="https://twitter.com/Dannie_Babz"><AiFillTwitterCircle className="w-8 h-8"/></a>
                <a href="https://www.linkedin.com/in/babatunde-daniel-76786b229/"><AiFillLinkedin className="w-8 h-8"/></a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpdCrcpCHTBWpbccwNPqZWHrjsSqTfGTbfTTFxXKgSJKQWBCwDRtZtcwwfzsrCNfspmhVq"><AiFillMail className="w-8 h-8"/></a>
                </div>
                </div>

            </div>
        </>
     );
}
 
export default Home;




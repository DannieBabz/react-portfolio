import { SiTailwindcss } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io"
import { TfiHtml5 } from "react-icons/tfi"
import { GrReactjs } from "react-icons/gr"

const Projects = () => {
    return ( 
        <>
            <div className="w-[15rem] m-auto h-fit pb-5 left-16 -mt-52 bg-bgcolor md:w-[40rem] md:-mt-[6rem] md:h-48 lg:w-[60rem] lg:-mt-[6rem] lg:h-48 rounded-lg absolute lg:left-[25%]" data-aos="zoom-out-down">
                <h1 className='text-btnColor font-raleway text-center text-2xl pt-5'>My Expertise</h1>

                <div className='flex flex-col justify-center space-y-6 items-center m-auto text-center pt-8 md:flex-row md:space-x-16 lg:space-x-32 lg:flex-row'>
                    <SiTailwindcss className='text-[#38BDF8] w-14 h-14'/>
                    <TfiHtml5 className='text-[#DD4B24] w-14 h-14' />
                    <SiCss3 className='text-[#2B94CD] w-14 h-14'/>
                    <IoLogoJavascript className='text-[#E9D44D] w-14 h-14'/>
                    <GrReactjs className='text-[#38BDF8]  w-14 h-14'/>
                </div>
            </div>
            <div className="flex flex-col space-y-10 pb-20 pl-2 pt-80 lg:justify-center lg:flex-row lg:space-x-24 lg:pt-52 lg:pb-40">
                <h1 className="font-raleway text-3xl">My Projects</h1>

                <div className="flex flex-col space-y-10">
                    <div className="flex flex-col w[18rem] space-y-5 lg:space-x-24 lg:flex-row" >
                        <a href="http://todo-react-js-meta.netlify.app/">
                        <img src="/src/assets/todoimg.png" alt="Todolist" className="w-[18rem] h-[10rem] m-auto md:w-[40rem] md:h-[20rem] hover:scale-125 transition-all" data-aos="fade-right" data-aos-duration="700"/></a>
                        <p className="text-lg m-auto justify-center px-2 md:text-xl md:w-[35rem]" data-aos="fade-left" data-aos-duration="700"><strong className="text-2xl font-raleway">TodoListX</strong><br /> TodoListX is a powerful and intuitive todo list application designed to simplify your daily tasks and boost productivity. With a clean and user-friendly interface, managing your to-dos has never been easier. <br /><strong className="text-md font-raleway">TECHNOLOGIES USED: REACTJS</strong> </p>
                    </div>
                    <div className="flex flex-col-reverse w[18rem] space-y-5 lg:space-x-24 lg:flex-row">
                        <p className="text-lg m-auto justify-center px-2 md:text-xl md:w-[35rem]" data-aos="zoom-in-up" data-aos-duration="700"><strong className="text-2xl font-raleway">Solana Homepage Clone</strong><br />Experience the beauty of Solana like never before with Solana Design. Our homepage is a celebration of stunning design and frontend aesthetics within the Solana blockchain ecosystem.<br /><strong className="text-md font-raleway">TECHNOLOGIES USED: HTML, CSS, TAILWINDCSS, JAVASCRIPT</strong></p>
                        <a href="https://solana-home.vercel.app/">
                        <img src="/src/assets/sol.png" alt="Solana Homepage" className="w-[18rem] h-[10rem] m-auto md:w-[40rem] md:h-[20rem] hover:scale-125 transition-all" data-aos="zoom-in-down" data-aos-duration="700"/></a>
                    </div>
                    <div className="flex flex-col w[18rem] space-y-5 lg:space-x-24 lg:flex-row">
                        <a href="https://crappo-cryptocurrency-web.netlify.app/">
                        <img src="/src/assets/crappo.png" alt="Crappo" className="w-[18rem] h-[10rem] m-auto md:w-[40rem] md:h-[20rem] hover:scale-125 transition-all"  data-aos="zoom-in-right" data-aos-duration="700"/></a>
                        <p className="text-lg m-auto justify-center px-2 md:text-xl md:w-[35rem]"  data-aos="zoom-in-left" data-aos-duration="700"><strong className="text-2xl font-raleway">CRAPPO Cryptocurrency Home</strong><br /> Designing the homepage for this cryptocurrency website was an exciting journey into the world of web design and frontend development. I&apos;m proud to present this project as an example of my commitment to creating visually appealing and user-friendly digital experiences. <br /><strong className="text-md font-raleway">TECHNOLOGIES USED: HTML, CSS</strong> </p>
                    </div>
                    <div className="flex flex-col-reverse w[18rem] space-y-5 lg:space-x-24 lg:flex-row">
                        <p className="text-lg m-auto justify-center px-2 md:w-[35rem] md:text-xl" data-aos="zoom-out-up" data-aos-duration="700"><strong className="text-2xl font-raleway">Bin2Dec</strong><br />Bin2Dec is a tool that simplifies the conversion of binary numbers into their decimal equivalents. The objective was to create a user-friendly and efficient converter that would assist users in making quick and accurate binary to decimal conversions. The challenge lay in designing a clean and intuitive interface while ensuring precise conversions.<br /><strong className="text-md font-raleway">TECHNOLOGIES USED: HTML, CSS, JAVASCRIPT</strong></p>
                        <a href="http://binarytodecim.netlify.app">
                        <img src="/src/assets/bin2dec.png" alt="Binary to Decimal" className="w-[18rem] h-[10rem] m-auto md:w-[40rem] md:h-[20rem] hover:scale-125 transition-all" data-aos="zoom-out-down" data-aos-duration="700"/></a>
                    </div>
                    <div className="flex flex-col w[18rem] space-y-5 lg:space-x-24 lg:flex-row">
                        <a href="https://jscountdown-timer.netlify.app/">
                        <img src="/src/assets/countdown.png" alt="Countdown Timer" className="w-[18rem] h-[10rem] m-auto md:w-[40rem] md:h-[20rem] hover:scale-125 transition-all" data-aos="zoom-in-down" data-aos-duration="700"/></a>
                        <p className="text-lg m-auto px-2 md:w-[35rem] md:text-xl" data-aos="zoom-out-down" data-aos-duration="700"><strong className="text-md font-raleway">Countdown Timer</strong><br />The Countdown Timer is a versatile tool that helps users track time for various purposes. The Countdown Timer that is not only functional but also visually appealing and easy to use. Whether users need to time an event, manage tasks, or create a sense of urgency, the challenge was to design a versatile timer that caters to diverse user needs.<br /><strong className="text-md font-raleway">TECHNOLOGIES USED: HTML, CSS, JAVASCRIPT</strong></p>
                    </div>
                </div>

            </div>
        </>
     );
}
 
export default Projects;
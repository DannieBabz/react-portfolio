import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const About = () => {
    return ( 
        <>
            <div className="flex px-2 flex-col md:justify-around lg:flex-row">
                <div className="mt-20 text-xl text-center md:text-3xl md:mt-60" data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine">
                    <h1 className="text-center text-secColor font-raleway">About <br /> Me</h1>
                    <div className="w-40 border m-auto text-btnColor h-0">
                        {/* Lines */}
                    </div>
                    <div className="w-0 border m-auto text-btnColor h-10">
                        {/* Lines */}
                    </div>

                </div>

                <div className="justify-center px-2 w-30 text-lg mt-20 lg:w-[50rem] md:text-2xl md:mt-20 lg:mt-40 text-bgcolor" data-aos="fade-up">
                    <div className="w-40 border text-btnColor h-0">
                        {/* Lines */}
                    </div>
    
                    <p>
                        I&apos;m not just a Web Developer, but someone who is deeply passionate about creative design, problem-solving through code and the web. My journey in the world of Web Development, especially the Front-End stack began during the latter parts of my High School years, after discovering my love for the web. I thrive on challenges and I&apos;m always eager to explore new technologies. Whether it&apos;s crafting user-friendly websites, designing eye-catching graphics, or finding innovative solutions to complex problems, I&apos;m committed to delivering excellence in everything I do. Let&apos;s work together to turn your ideas into reality. Explore my portfolio below to see some of my recent projects, and feel free to reach out to start a conversation about your next project.
                    </p><br />
                    <p>
                        This portfolio is a collection of my work, each project a testament to my dedication to user-centric design, creative solutions. When you explore my projects, you&apos;ll find:
                    </p><br />
                    <ul>
                        <li>Responsive Web Designs that adapts to all devices</li>
                        <li>A solution to recording tasks</li>
                        <li>Fun Christmas Light</li>
                        <li>A FUN-ctioning Stopwatch</li>
                    </ul>
                    <p>I invite you to browse through my portfolio to get a feel for my work and how I can contribute to your next project.</p>
                    <div className="w-0 border text-btnColor h-10">
                        {/* Lines */}
                    </div>

                </div>
    
            </div>
        </>

     );
}
 
export default About;
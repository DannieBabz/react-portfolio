import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";


const Footer = () => {
    return ( 
        <>
            <h1 className="font-raleway text-3xl" data-aos="fade-left" data-aos-duration="500">Let&apos;s Connect!</h1>
            <div className="flex justify-center space-x-5 md:space-x-11 mt-10">
                <a href="http://github.com/DannieBabz"><AiFillGithub className="w-14 h-14"/></a>
                <a href="https://twitter.com/Dannie_Babz"><AiFillTwitterCircle className="w-14 h-14"/></a>
                <a href="https://www.linkedin.com/in/babatunde-daniel-76786b229/"><AiFillLinkedin className="w-14 h-14"/></a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpdCrcpCHTBWpbccwNPqZWHrjsSqTfGTbfTTFxXKgSJKQWBCwDRtZtcwwfzsrCNfspmhVq"><AiFillMail className="w-14 h-14"/></a>
            </div>
        </>
     );
}
 
export default Footer;
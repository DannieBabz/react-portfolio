import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, 'HSrWBNbsXEhJeS8mF')
      .then((result) => {
          console.log(result.text);
          if(result.text == "OK"){
            const form = document.getElementById("form");
            form.reset();
          }
      }, (error) => {
          console.log(error.text);
      });
  };
    return ( 
        <>
            <div className="md:m-auto mt-40 items-center md:mt-40 md:w-[30rem]" data-aos="fade-right" data-aos-duration="500" data-aos-offset="500"
     data-aos-easing="ease-in-sine">
            <h1 className="text-3xl text-btnColor font-raleway">Interested in collaborating with me?</h1>
            <p className="text-xl">I’m always open to discussing product design work or partnership opportunities.Also, if you have a question, proposal, idea or just want to say hi, Go ahead.</p>
            </div>
            <form action="" id="form" method="post" onSubmit={sendEmail} ref={form} className="flex flex-col pt-36 w-[100%] m-auto lg:w-[30%] lg:pt-52" data-aos="fade-left" data-aos-duration="500" data-aos-offset="500"
     data-aos-easing="ease-in-sine">
                <label htmlFor="name">Name:</label>
                <input type="text" name="user_name" placeholder="Name" className="p-5 outline-none rounded-lg w-[100%]"/><br />
                <label htmlFor="email">E-mail Address:</label>
                <input type="email" name="user_email" id="email" placeholder="E-mail Address" className="p-5 outline-none rounded-lg w-[100%]"/><br />
                <label htmlFor="message">Message:</label>
                <textarea name="message" cols="30" rows="10" placeholder="Let's Talk..." className="p-5 outline-none resize-none rounded-lg"></textarea>
                <input type="submit" value="Send Message" className="w-[50%] m-auto mt-9 px-8 py-4 rounded-md bg-bgcolor text-secColor"/>
            </form>
        </>
     );
}
 
export default Contact;
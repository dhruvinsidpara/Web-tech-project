import Navbar from "../component/Navbar"
import Hero from "../component/Hero"
import contactImg from "../assets/10.jpg"
import Footer from "../component/Footer";
import ContactForm from "../component/ContactForm";
function Contact(){
    return(
        <>
         <Navbar />
      
      <Hero
       cName="hero-mid"
       heroImg={contactImg}
       title="Contact"
       />
      <ContactForm/>
      <Footer/>
    </>
    );

}
export default Contact;

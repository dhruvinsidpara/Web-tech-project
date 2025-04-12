import Navbar from "../component/Navbar"
import Hero from "../component/Hero"
import contactImg from "../assets/10.jpg"
function Contact(){
    return(
        <>
         <Navbar />
      
      <Hero
       cName="hero-mid"
       heroImg={contactImg}
       title="Contact"
       />
    </>
    )

}
export default Contact;

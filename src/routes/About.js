import Navbar from "../component/Navbar"
import Hero from "../component/Hero"
import AboutImg from "../assets/11.jpeg"
import Footer from "../component/Footer";
import Aboutus from "../component/Aboutus";
function About (){
    return(
        <>
         <Navbar />
      
        <Hero
         cName="hero-mid"
         heroImg={AboutImg}
         title="About"
         
         />
         <Aboutus/>

        <Footer/>
          
        </>
    );

}
export default About;

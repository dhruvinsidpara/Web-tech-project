import Navbar from "../component/Navbar"
import Hero from "../component/Hero"
import seviceImg from "../assets/9.jpg"
import Trip from "../component/Trip"; 
import Footer from "../component/Footer";
function Service(){
    return(
        <>
         <Navbar />
      
      <Hero
       cName="hero-mid"
       heroImg={seviceImg}
       title="Service"
       />
       <Trip/>
      <Footer/>
        
        </>
    )

}
export default Service;
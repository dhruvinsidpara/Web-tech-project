import Navbar from "../component/Navbar"
import Hero from "../component/Hero"
import seviceImg from "../assets/14.webp"
function Service(){
    return(
        <>
         <Navbar />
      
      <Hero
       cName="hero-mid"
       heroImg={seviceImg}
       title="Service"
       />
        
        </>
    )

}
export default Service;
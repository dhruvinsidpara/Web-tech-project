import Navbar from "../component/Navbar"
import Hero from "../component/Hero"
import seviceImg from "../assets/9.jpg"
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
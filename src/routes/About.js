import Navbar from "../component/Navbar"
import Hero from "../component/Hero"
import AboutImg from "../assets/11.jpeg"
function About (){
    return(
        <>
         <Navbar />
      
        <Hero
         cName="hero-mid"
         heroImg={AboutImg}
         title="About"
         
         />
          
        </>
    );
=======
function About() {
  return (
    <>
      <h1>This is about</h1>
    </>
  );
}


}
export default About;
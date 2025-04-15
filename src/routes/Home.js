
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import homeImg from "../assets/1.jpg";
import Destination from "../component/Destination";
import Trip from "../component/Trip"; 
import Footer from "../component/Footer";

function Home (){
    return(
        <>
         <Navbar />
        <Hero
         cName="hero"
         heroImg={homeImg}
         title="Your Journey Your Story"
         text="Choose Your Destination"
         buttontext="Travel Plan"
         url="/" 
         btnclass="show" 
         />
         <Destination/>
         <Trip/>
         <Footer/>
         

        </>
    );

};
export default Home;
// keval vala 

import mubai from "../assets/mubai.jpg"
import ladak from "../assets/7.jpeg"
import sikkim from "../assets/6.jpeg"

import "./Destination.css"
import DestinationData from "../component/DestinationData";
const destination = () => {
    return(
        <div className="destination">
         <h1> Popular Destination</h1>
         <p> Tours give you the opportunity to see a lot, within a time frame </p>
         <DestinationData
         className="first-des"
         heading="Ladakh"
         text=" n this Ladakh travel guide, you will learn all you need to know about the type of clothes to carry, 
         what documents are required for a Ladakh bike trip, how to deal with AMS, permits required for Ladakh travel, 
         the cost of travel, how to travel to Ladakh with kids and senior citizens, and much more."
         img1={ladak}
         />

         <DestinationData
         className="first-des-reverse"
         heading="Mumbai"
         text=" 1.Mumbai is located in Maharashtra and is an island city on the west coast of India.
         2.Mumbai is most famous for being one of India's largest and most crowded cities as well as being the home of Bollywood.
         3.Top attractions in Mumbai include the Gateway of India, Crawford Market, Kala Ghoda, Marine Drive, the Elephanta Caves, and Banganga Tank."
         img1={mubai}
         />

         <DestinationData
         className="first-des"
         heading="Sikkim"
         text=" Sikkim has plenty of natural enthralling tourist places, 
         beautiful towns and villages as well as world famous monasteries which are not to be missed! 
         Sikkim is also famous for some adventure sports like mountaineering, trekking, river rafting, 
         mountain biking and hang gliding."
         img1={sikkim}
         />

       
        </div> 
    );
};
export default destination;


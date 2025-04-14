import "./Trip.css";
import TripData from "./TripData";
import keval from "../assets/1.jpg";
import dhruvin from "../assets/2.jpg";
import pritam from "../assets/8.jpg";


function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            
            <div className="tripcard">
                <TripData 
                    image={keval}
                    heading="Mumbai"
                    text="Mumbai, the city of dreams, is famous for Bollywood, street food, and the Gateway of India."
                />
                
                <TripData 
                    image={pritam}
                    heading="Goa"
                    text="Goa is known for its stunning beaches, vibrant nightlife, and Portuguese heritage."
                />
                
                <TripData 
                    image={dhruvin}
                    heading="Manali"
                    text="Manali is a beautiful hill station with breathtaking mountains and adventure sports."
                />
            </div>
        </div>
    );
}

export default Trip;


import "./Trip.css";
import TripData from "./TripData";
import keval from "../assets/2.jpg";
import dhruvin from "../assets/8.jpg";
import pritam from "../assets/13.webp";


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
                    link="https://mumbaitourism.travel/top-places-to-visit-in-mumbai"
                />
                
                <TripData 
                    image={pritam}
                    heading="UDAIPUR"
                    text="Udaipur, India was founded in 1559, [1] by Maharana Udai Singh II [2] in the fertile circular Girwa Valley to the southwest of Nagda, on the Banas River. 
                         The city was established as the new capital of the Mewar kingdom."
                         link="https://www.getyourguide.com/udaipur-city-palace-l104145/viewing-points-tc238/?cmp=bing&ad_id=77859371813187&adgroup_id=1245747323364739&bid_match_type=bb&campaign_id=710120060&device=c&feed_item_id=&keyword=-l104145%2F&loc_interest_ms=&loc_physical_ms=158263&match_type=b&msclkid=0e90fd1bb6541f16ae019ae5200b5ed7&network=o&partner_id=CD951&target_id=dat-2329658981072521&utm_adgroup=lc%3D104145%3Audaipur%20city%20palace%7Cfn%3Df1%7Cagt%3Ddsa&utm_campaign=dc%3D55%3Ain%7Clc%3D104145%3Audaipur%20city%20palace%7Cct%3Dcore%7Cln%3D29%3Aen%7Ctc%3Dall&utm_keyword=-l104145%2F&utm_medium=paid_search&utm_query=udaipur%20website&utm_source=bing"
                />
                
                <TripData 
                    image={dhruvin}
                    heading="Dwarka"
                    text="The Dwarkadhish temple, also known as the Jagat Mandir and occasionally spelled Dwarakadheesh, is a Hindu temple dedicated to Krishna, 
                    who is worshiped in the temple by the name Dwarkadhish (Dvārakādhīśa), or 'King of Dwarka'"
                    link="https://www.gujarattourism.com/saurashtra/devbhoomi-dwarka/dwarkadhish-temple.html"
                />
            </div>
        </div>
    );
}

export default Trip;


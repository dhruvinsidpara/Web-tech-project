// import "./Trip.css";

// function TripData(props){
//     return (
//         <div className="t-card">
//             <div className="t-image">
//                 <img  src={props.image} alt="Img"/>
//             </div>
//             <h4> {props.heading}</h4>
//             <p>{props.text}</p>
//         </div>
//     )
// }
// export default TripData;
import "./Trip.css";

function TripData(props) {
    return (
        <div className="t-card">
            <div className="t-image">
                {/* ✅ If a link is passed, wrap image in <a>, else show normal image */}
                {props.link ? (
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        <img src={props.image} alt="Img" />
                    </a>
                ) : (
                    <img src={props.image} alt="Img" />
                )}
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    );
}

export default TripData;

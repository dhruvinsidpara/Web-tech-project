// import { classicNameResolver } from "typescript";
import "./Footer.css";
const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Trippy</h1>
                    <p>choose your destination.</p>
                </div>
                <div>
                   <a href="/" >
                   <i className="fa-brands fa-facebook-squarei"></i>
                   </a>

                   <a href="/" >
                   <i className="fa-brands fa-intrsgram-squarei"></i>
                   </a>

                   <a href="/" >
                   <i className="fa-brands fa-twitter-squarei"></i>
                   </a>

                   <a href="/" >
                   <i className="fa-brands fa-behance-squarei"></i>
                   </a>
                </div>
            </div>
            <div className="botton">
                <div>
                    <h4>Project</h4>
                    <a href="/"> changelog</a>
                    <a href="/"> status</a>
                    <a href="/"> License</a>
                    <a href="/"> All version</a>
                </div>

                <div>
                    <h4>Community</h4>
                    <a href="/"> GitHub</a>
                    <a href="/"> Issues</a>
                    <a href="/"> project</a>
                    <a href="/"> Twitter</a>
                </div>

                <div>
                    <h4>Help</h4>
                    <a href="/">support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">contact us</a>
                    
                </div>

                <div>
                    <h4>Other</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy pollicy</a>
                    <a href="/">License</a>
                    
                </div>
            </div>
                
        </div>
    
    );

}
export default Footer;

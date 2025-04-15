import { Component, createRef } from "react";
import "./Destination.css";

class DestinationData extends Component {
  constructor(props) {
    super(props);
    this.imageRef = createRef();
  }

  componentDidMount() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.imageRef.current.classList.add("animate-slide-in");
        } else {
          // You can also remove the animation when the element goes out of view (optional)
          this.imageRef.current.classList.remove("animate-slide-in");
        }
      },
      { threshold: 0.2 }
    );
  
    if (this.imageRef.current) {
      observer.observe(this.imageRef.current);
    }
  }
  

  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image-container" ref={this.imageRef}>
          <img className="slide-img" alt="img" src={this.props.img1} />
        </div>
      </div>
    );
  }
}

export default DestinationData;

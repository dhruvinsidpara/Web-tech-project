import "./ContactForm.css";
function ContactForm(){
    return (
        <div className="from-container">
            <h1>
                send a message to us!.
            </h1>
            <form>
                <input placeholder="Name"/>  
                <input placeholder="Email"/>    
                <input placeholder="Subject"/>    
                <textarea placeholder="message" rows="4"></textarea>
                <button> send massge </button>
           </form>
  
         </div>

    );
}
export default ContactForm;

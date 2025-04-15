// import React, { useState, useEffect, useRef } from 'react';

// function Chatbot() {
//   const [userInput, setUserInput] = useState("");  // To hold the user's input
//   const [chat, setChat] = useState([]);  // To hold the conversation (user + bot messages)
//   const [isLoading, setIsLoading] = useState(false); // To manage loading state for bot reply
//   const chatEndRef = useRef(null); // Reference to scroll to the bottom

//   // Function to handle sending the message
//   const handleSend = async () => {
//     if (!userInput.trim()) return;  // Prevent empty messages

//     setIsLoading(true);  // Start loading when message is sent

//     try {
//       // Send a POST request to Django server with user message
//       const res = await fetch("http://127.0.0.1:8000/chatbot_response/", {
//         method: "POST",  // Use POST method
//         headers: {
//           "Content-Type": "application/json",  // Ensure you're sending JSON
//         },
//         body: JSON.stringify({ message: userInput }),  // Send user input as message
//       });

//       const data = await res.json();  // Parse the JSON response from Django

//       if (res.ok) {
//         // If the response is OK, update chat
//         setChat((prevChat) => [...prevChat, { user: userInput, bot: data.reply }]);
//       } else {
//         // If there's an error, show a default error message
//         setChat((prevChat) => [...prevChat, { user: userInput, bot: data.error || "Sorry, something went wrong!" }]);
//       }

//       setUserInput("");  // Clear input field
//     } catch (error) {
//       console.error("Error fetching bot reply:", error);
//       setChat((prevChat) => [...prevChat, { user: userInput, bot: "Sorry, something went wrong!" }]);
//     } finally {
//       setIsLoading(false);  // Stop loading after response is received
//     }
//   };

//   // Scroll to the bottom of the chat container when a new message is added
//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [chat]);

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <h2>🌍 Tourism Assistant</h2>
//       <div style={{ border: "1px solid #ccc", padding: "10px", height: "300px", overflowY: "scroll" }}>
//         {/* Display all chat messages */}
//         {chat.map((msg, index) => (
//           <div key={index}>
//             <p><strong>You:</strong> {msg.user}</p>
//             <p><strong>Bot:</strong> {msg.bot}</p>
//             <hr />
//           </div>
//         ))}
//         {/* Scroll to the bottom automatically when a new message is added */}
//         <div ref={chatEndRef} />
//       </div>

//       {/* Input field for the user */}
//       <input
//         style={{ width: "80%", padding: "10px", marginTop: "10px" }}
//         type="text"
//         value={userInput}
//         placeholder="Ask about a place..."
//         onChange={(e) => setUserInput(e.target.value)}  // Update user input on change
//       />
      
//       {/* Button to send the message */}
//       <button
//         onClick={handleSend}
//         style={{ padding: "10px" }}
//         disabled={isLoading}  // Disable the button while the request is in progress
//       >
//         {isLoading ? "Loading..." : "Send"}
//       </button>
//     </div>
//   );
// }

// export default Chatbot;



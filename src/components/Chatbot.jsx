import React, { useState } from "react"; 
import './Chatbot.css'; 

function Chatbot() {
    const [inputText, setInputText] = useState('');
    const [responseText, setResponseText] = useState('');


    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        // Example response logic
        setResponseText(`You said: "${inputText}"`);
        setInputText(''); // this will Clear input field
    };

    return (
        <div className="right_detail">
            <h1>Welcome to CatMe Chatbot</h1>

            <div className="chat-container">
                <div className="chat-box">
                    <div className="chat">
                        {/* Display response text if available */}
                        {responseText && <div className="response">{responseText}</div>}
                    </div>
                </div>

                <form className="input-form" onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        value={inputText}
                        onChange={handleInputChange}
                        placeholder="Type your message..."
                        className="input-field"
                    />
                    <button type="submit" className="send-button">
                        Send
                    </button>
                </form>
            </div>

            <div id="buttonToDetail">
                {/* Placeholder for additional buttons or details */}
            </div>
        </div>
    );
}

export default Chatbot;

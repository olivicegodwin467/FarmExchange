import React, { useState } from 'react';

function Ussd_form() {
    const [session, setSession] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:8000/api/agri-ussd", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                sessionId: "12345",
                serviceCode: "*182#",
                phoneNumber: "1234567890",
                text: session
            })
        });

        const textResponse = await res.text();
        setResponse(textResponse);
    };

    return (
        <div className="ussd-container">
            <h2>USSD Simulator</h2>
            <form className="ussd-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={session} 
                    onChange={(e) => setSession(e.target.value)}
                    placeholder="Enter USSD code"
                />
                <button type="submit">Dial</button>
            </form>
            <textarea 
                id="responseBox"
                value={response} 
                readOnly
                rows="5"
            />
        </div>
    );
}

export default Ussd_form;

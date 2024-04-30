import React, { useState } from 'react';
import './ReservationKey.css'; // Import your CSS file for styling

function ReservationKey() {
    const [reservationCode, setReservationCode] = useState('');
    const [codeGenerated, setCodeGenerated] = useState(false); // Track if code has been generated

    // Function to generate a random numeric code of maximum length 6
    function generateReservationCode() {
        if (!codeGenerated) { // Check if code has already been generated
            const min = 10000; // Minimum value for a 5-digit number
            const max = 99999; // Maximum value for a 5-digit number
            const code = Math.floor(Math.random() * (max - min + 1)) + min;
            setReservationCode(code);
            setCodeGenerated(true); // Set codeGenerated to true
        }
    }

    // Function to handle download button click
    function handleDownloadClick() {
        // Check if reservation code is available
        if (!reservationCode) {
            console.log('No reservation code available for download.');
            return;
        }

        // Generate a blob containing the reservation code
        const blob = new Blob([reservationCode], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);

        // Create a temporary <a> element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'reservation_code.txt';
        document.body.appendChild(a);
        a.click();

        // Clean up
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }

    return (
        <div className="reservation-container">
            <h2>Reservation Page</h2>
            <button onClick={generateReservationCode} disabled={codeGenerated}>Generate Reservation Code</button>
            
            {reservationCode && (
                <div className="reservation-code">
                    <h3>Your Reservation Code:</h3>
                    <p>{reservationCode}</p>
                    <button onClick={handleDownloadClick}>Download Code</button>
                </div>
            )}
        </div>
    );
}

export default ReservationKey;

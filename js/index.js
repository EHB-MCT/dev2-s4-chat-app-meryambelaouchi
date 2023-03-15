"use strict";

const chat = {
    author: "yourName",
    init() {
        this.fetchMessages();
    },
    sendMessage() {},
    fetchMessages() {
        fetch('https://dev2chat.onrender.com/messages')
            .then(function (response) {
                return response.json();
            })
            .then(function (message) {
                console.log(message);

            });

    },
    renderMessage(message) {}

};

chat.init();
let chat_email = document.getElementById('email');
let chat_msg = document.getElementById('chat_msg');
let chat_button = document.getElementById('chat_button');
let chat_output = document.getElementById('chat_output');

const setMessage = (email, time, msg) => {
    new_chat = `
        <br/>
        <ul class="list-inline m-0">
            <li class="list-inline-item"><bold class="text-primary"> ${email} </bold></li>
            <li class="list-inline-item"><p class="text text-brown"> ${email} </p></li>
            <li class="list-item"><i class="text-success"> ${msg} </i></li>
        </ul>
        <br/>
    `
    return new_chat;
};

const getChatTime = (chat_time) => {
    let full_date = `${chat_time.getDate()}/${chat_time.getMonth() + 1}/${chat_time.getFullYear()}`
    let full_hours = `${chat_time.getHours()}:${chat_time.getMinutes()}:${chat_time.getSeconds()}`
    return `${full_date} ${full_hours}`
};

chat_button.addEventListener('click', (e) => {
    e.preventDefault();
    let chat_time = new Date();
    let formated_time = getChatTime(chat_time);

    let chat = {
        email: chat_email.value,
        time: formated_time, 
        msg: chat_msg.value, 
    }

    socket.emit('addChat', chat);

    chat_msg.value = '';
    email.value = '';
});

socket.on('addChat', chat => {
    let message = setMessage(chat.email, chat.time, chat.msg);
    chat_output.innerHTML += message;
});
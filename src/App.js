import React from 'react';
import {ChatEngine} from 'react-chat-engine';

export function App() {
    requestNotificationPermission()
    return (<ChatEngine
        height='100vh'
        userName='z'
        userSecret='12345678'
        projectID='cb14cd06-00be-4cc3-b17d-b8ef6bb2927f'
        onNewMessage={(chatId, message) => {
            new Notification(message.sender_username, {body: message.text}); // show a system notification
        }}
    />);
}

function requestNotificationPermission() {
    Notification.requestPermission().then(r => console.log(r))
}

export default App;

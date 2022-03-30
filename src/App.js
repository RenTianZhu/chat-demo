import React from 'react';
import {ChatEngine, ChatList} from 'react-chat-engine';
import ChatEngineCustom from "./ChatEngineCustom";
import ChatListCustom from "./ChatListCustom";

export function App() {
    requestNotificationPermission()
    return (<ChatEngine // 这个控件已经带有全套UI了，够交差用这个就好
        height='100vh'
        userName='t' // 用户输入
        userSecret='12345678' // 用户输入
        projectID='cb14cd06-00be-4cc3-b17d-b8ef6bb2927f'
        onNewMessage={(chatId, message) => {
            new Notification(message.sender_username, {body: message.text}); // 展示一个系统通知，比如mac的右上角通知
        }}
    />);
    // return (<ChatEngineCustom/>) // 自定义聊天UI
}

function requestNotificationPermission() {
    Notification.requestPermission().then(r => console.log(r))
}

export default App;

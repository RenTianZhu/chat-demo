import React, {useState} from 'react';
import {ChatEngineWrapper, ChatFeed, ChatList, getOrCreateChat, Socket} from 'react-chat-engine';
export function App() {
    const [username, setUsername] = useState('')

    requestNotificationPermission()
    return (
        //     <ChatEngine // 这个控件已经带有全套UI了，够交差用这个就好
        //     height='100vh'
        //     userName='t' // 用户输入
        //     userSecret='12345678' // 用户输入
        //     projectID='cb14cd06-00be-4cc3-b17d-b8ef6bb2927f'
        //     onNewMessage={(chatId, message) => {
        //         new Notification(message.sender_username, {body: message.text}); // 展示一个系统通知，比如mac的右上角通知
        //     }}
        // />
        <ChatEngineWrapper>
            <Socket
                userName='t' // 用户输入
                userSecret='12345678' // 用户输入
                projectID='cb14cd06-00be-4cc3-b17d-b8ef6bb2927f'
            />

            <div className='chat_list'>
                <ChatList
                    renderNewChatForm={(creds) => renderChatForm(creds)}
                />
            </div>

            <div className='chat_feed'>
                <ChatFeed/>
            </div>
        </ChatEngineWrapper>
    );

    function requestNotificationPermission() {
        Notification.requestPermission().then(r => console.log(r))
    }

    function renderChatForm(creds) {
        return (
            <div>
                <input
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={() => createDirectChat(creds)}>
                    New Message
                </button>
            </div>
        )
    }

    function createDirectChat(creds) {
        getOrCreateChat(
            creds,
            { is_direct_chat: true, usernames: [username] },
            () => setUsername('')
        )
    }
}

export default App;

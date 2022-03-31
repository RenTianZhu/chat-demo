// import React, {useContext, useState} from 'react'
//
// import {
//     ChatEngine,
//     ChatEngineContext,
//     ChatEngineWrapper,
//     ChatFeed,
//     ChatList, ChatSettings,
//     getOrCreateChat,
//     Socket
// } from 'react-chat-engine'
// import ChatEngineCopy from "./ChatEngineCopy";
// import {Col} from "react-grid-system";
//
// const DirectChatPage = () => {
//     // const {
//     //     connecting, setConnecting,
//     //     conn, setConn,
//     //     creds, setCreds,
//     //     chats, setChats,
//     //     messages, setMessages,
//     //     activeChat, setActiveChat,
//     //     typingCounter, setTypingCounter,
//     //     loadMoreMessages, setLoadMoreMessages,
//     //     isBottomVisible, setIsBottomVisible,
//     // } = useContext(ChatEngineContext);
//
//     const [username, setUsername] = useState('')
//
//     function createDirectChat(creds) {
//         getOrCreateChat(
//             creds,
//             { is_direct_chat: true, usernames: [username] },
//             () => setUsername('')
//         )
//     }
//
//     function renderChatForm(creds) {
//         return (
//             <div>
//                 <input
//                     placeholder='Username'
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <button onClick={() => createDirectChat(creds)}>
//                     Create
//                 </button>
//             </div>
//         )
//     }
//
//     function renderChatCard(chat) {
//         if (chat.id === undefined) return
//         console.log("chat: " + JSON.stringify(chat))
//         console.log("chatid: " + chat.id)
//         var otherPerson = chat.people.find(function (person) {
//             return 't' !== person.person.username;
//         });
//         return (
//             <div>
//                 {/*<div>{otherPerson}</div>*/}
//             </div>
//         )
//     }
//
//     return (
//         <div className='allScreen'>
//         <ChatEngineWrapper>
//             <Socket
//                 userName='t' // 用户输入
//                 userSecret='12345678' // 用户输入
//                 projectID='cb14cd06-00be-4cc3-b17d-b8ef6bb2927f'
//             />
//             <div className='allScreen'>12142352fkdgkagakghakghakghfkajghkadhgkdfhgkagh53523</div>
//
//             <Col xs={0} sm={3}>
//                 <ChatList />
//             </Col>
//
//             <Col xs={0} sm={3}>
//                 <ChatFeed />
//             </Col>
//
//             <Col xs={0} sm={3}>
//                 <ChatSettings />
//             </Col>
//         </ChatEngineWrapper>
//         </div>
//         // <ChatEngine
//         //     height='100vh'
//         //     userName='t' // 用户输入
//         //     userSecret='12345678' // 用户输入
//         //     projectID='cb14cd06-00be-4cc3-b17d-b8ef6bb2927f'
//         //     // renderChatCard={(chat, index) => renderChatCard(chat)}
//         //     // renderNewChatForm={(creds) => renderChatForm(creds)}
//         //     // renderChatSettings={(chatAppState) => {}}
//         // />
//     )
// }
//
// export default DirectChatPage;
// import React, {useContext, useEffect, useRef, useState} from 'react'
//
// import {
//     ChatEngineWrapper,
//     Socket,
//     ChatList,
//     ChatFeed,
//     ChatSettings,
//     ChatEngineContext,
//     ChatEngineContext as ChatEngineContext$1,
//     getLatestChats as getLatestChats$1,
//     getChatsBefore as getChatsBefore$1,
//     NewChatForm
// } from 'react-chat-engine'
//
// import {Col} from 'react-grid-system'
// import ChatListCustom from "./ChatListCustom";
//
// /**
//  * 自由组合聊天子组件
//  */
// const ChatEngineCustom = () => {
//     return (
//         <ChatEngineWrapper>
//             <Socket // 用户的登录信息，必须配置
//                 userName='t' // 用户输入
//                 userSecret='12345678' // 用户输入
//                 projectID='cb14cd06-00be-4cc3-b17d-b8ef6bb2927f'
//             />
//
//             <Col xs={0} sm={3}>
//                 {/*<ChatListCus/>*/}
//                 <ChatList/> {/*SDK中提供的聊天列表，可直接使用*/}
//             </Col>
//
//         </ChatEngineWrapper>
//     )
// }
//
// // TODO 尝试完全自定义聊天列表，但是数据处理卡住了
// // var ChatListCus = function ChatListCus(props) {
// //     var didMountRef = useRef(false);
// //
// //     var _useState = useState(false),
// //         loadChats = _useState[0],
// //         setLoadChats = _useState[1];
// //
// //     var _useState2 = useState(true),
// //         hasMoreChats = _useState2[0],
// //         setHasMoreChats = _useState2[1];
// //
// //     var _useContext = useContext(ChatEngineContext$1),
// //         conn = _useContext.conn,
// //         chats = _useContext.chats,
// //         setChats = _useContext.setChats,
// //         setActiveChat = _useContext.setActiveChat;
// //
// //     function renderChats(chats) {
// //         return chats.map(function (chat, index) {
// //             if (!chat) {
// //                 return /*#__PURE__*/React.createElement("div", {
// //                     key: "chat_" + index
// //                 });
// //             } else if (props.renderChatCard) {
// //                 return /*#__PURE__*/React.createElement("div", {
// //                     key: "chat_" + index
// //                 }, props.renderChatCard(chat, index));
// //             } else {
// //                 return /*#__PURE__*/React.createElement("div", {
// //                     key: "chat_" + index,
// //                     onClick: function onClick() {
// //                         return props.onChatClick && props.onChatClick(chat.id);
// //                     }
// //                 }, /*#__PURE__*/React.createElement("div", {
// //                     chat: chat
// //                 }));
// //             }
// //         });
// //     }
// //
// //     return /*#__PURE__*/React.createElement("div", {
// //         className: "ce-chat-list"
// //     }, /*#__PURE__*/React.createElement("div", {
// //         className: "ce-chats-container"
// //     }, props.renderNewChatForm ? props.renderNewChatForm(conn) : /*#__PURE__*/React.createElement(NewChatForm, {
// //         onClose: props.onClose ? function () {
// //             return props.onClose();
// //         } : undefined
// //     }), renderChats(chats), hasMoreChats && chats.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement('div', {
// //         onVisible: function onVisible() {
// //             return !loadChats && setLoadChats(true);
// //         }
// //     }), /*#__PURE__*/React.createElement("div", {
// //         style: {
// //             height: '8px'
// //         }
// //     }))));
// // };
//
// export default ChatEngineCustom
// import React, {createContext, useContext, useEffect, useRef, useState} from "react";
// import {Col, Row} from "react-grid-system";
// import {
//     ChatEngineContext as ChatEngineContext$1,
//     ChatEngineContext,
//     ChatFeed,
//     ChatList,
//     ChatSettings, getLatestChats as getLatestChats$1,
//     getLatestMessages as getLatestMessages$1, readMessage as readMessage$1
// } from "react-chat-engine";
//
// var ChatEngineCopy = function ChatEngineCopy(props) {
//     var context = useContext(ChatEngineContext);
//     console.log("context:" + JSON.stringify(context))
//     var height = props.height;
//
//     var propsAndContext = _extends({}, props, context);
//
//     return /*#__PURE__*/React.createElement("div", {
//         className: "ce-chat-engine",
//         style: {
//             textAlign: 'left',
//             backgroundColor: 'white'
//         }
//     }, /*#__PURE__*/React.createElement(Socket$1, props), /*#__PURE__*/React.createElement(Row, {
//         className: "ce-wrapper"
//     }, /*#__PURE__*/React.createElement(Col, {
//         xs: 0,
//         sm: 3,
//         style: {
//             height: height ? height : ''
//         },
//         className: "ce-chat-list-column"
//     },  /*#__PURE__*/React.createElement(ChatList, _extends({}, propsAndContext, {
//         onChatClick: function onChatClick(chatID) {
//             // TODO render chat feec
//             // if (props.renderChatFeed) {
//             //     getLatestMessages$1(props, chatID, 45, function (id, list) {
//             //         context.setMessages(_extends({}, _$1.mapKeys(list, 'created')));
//             //     });
//             // }
//         }
//     }))), /*#__PURE__*/React.createElement(Col, {
//         xs: 12,
//         sm: 6,
//         style: {
//             height: height ? height : ''
//         },
//         className: "ce-chat-feed-column"
//     }, /*#__PURE__*/React.createElement(ChatFeed, propsAndContext)), /*#__PURE__*/React.createElement(Col, {
//         xs: 0,
//         sm: 3,
//         style: {
//             height: height ? height : ''
//         },
//         className: "ce-settings-column"
//     })));
// };
//
// var Socket = function Socket(props) {
//     var handleEvent = function handleEvent(event) {
//         try {
//             var eventJSON = JSON.parse(event);
//
//             if (eventJSON.action === 'pong') {
//                 setShouldPongBy(Date.now() + minSocketLag);
//             } else if (eventJSON.action === 'new_chat') {
//                 var chat = eventJSON.data;
//
//                 if (chats) {
//                     var newChats = _extends({}, chats);
//
//                     newChats[chat.id] = chat;
//                     setChats(newChats);
//                     setActiveChat(chat.id);
//                 }
//
//                 props.onNewChat && props.onNewChat(eventJSON.data);
//             } else if (eventJSON.action === 'edit_chat') {
//                 handleEditChat(eventJSON.data);
//             } else if (eventJSON.action === 'delete_chat') {
//                 var _chat = eventJSON.data;
//
//                 if (chats) {
//                     chats[_chat.id] = undefined;
//                     setChats(chats);
//
//                     if (!_.isEmpty(chats)) {
//                         var sortedChats = sortChats(chats);
//                         setActiveChat(sortedChats[0] ? parseInt(sortedChats[0].id) : 0);
//                     }
//                 }
//
//                 props.onDeleteChat && props.onDeleteChat(_chat);
//             } else if (eventJSON.action === 'add_person') {
//                 handleEditChat(eventJSON.data);
//                 props.onAddPerson && props.onAddPerson(eventJSON.data);
//             } else if (eventJSON.action === 'remove_person') {
//                 handleEditChat(eventJSON.data);
//                 props.onRemovePerson && props.onRemovePerson(eventJSON.data);
//             } else if (eventJSON.action === 'new_message') {
//                 var _eventJSON$data = eventJSON.data,
//                     id = _eventJSON$data.id,
//                     message = _eventJSON$data.message;
//
//                 if (parseInt(id) === parseInt(activeChat)) {
//                     var newMessages = _extends({}, messages);
//
//                     newMessages[message.created] = message;
//                     setMessages(newMessages);
//                 }
//
//                 if (message.sender_username !== props.userName && isBottomVisible) {
//                     readMessage$1(conn, activeChat, message.id, function (chat) {
//                         return handleEditChat(chat);
//                     });
//                 }
//
//                 props.onNewMessage && props.onNewMessage(id, message);
//             } else if (eventJSON.action === 'edit_message') {
//                 var _eventJSON$data2 = eventJSON.data,
//                     _id = _eventJSON$data2.id,
//                     _message = _eventJSON$data2.message;
//
//                 if (_id === activeChat) {
//                     messages[_message.created] = _message;
//                     setMessages(messages);
//                 }
//
//                 props.onEditMessage && props.onEditMessage(_id, _message);
//             } else if (eventJSON.action === 'delete_message') {
//                 var _eventJSON$data3 = eventJSON.data,
//                     _id2 = _eventJSON$data3.id,
//                     _message2 = _eventJSON$data3.message;
//
//                 if (_id2 === activeChat) {
//                     messages[_message2.created] = undefined;
//                     setMessages(messages);
//                 }
//
//                 props.onDeleteMessage && props.onDeleteMessage(_id2, _message2);
//             } else if (eventJSON.action === 'is_typing') {
//                 var _extends2, _extends3;
//
//                 var _eventJSON$data4 = eventJSON.data,
//                     _id3 = _eventJSON$data4.id,
//                     person = _eventJSON$data4.person;
//
//                 var newTypingCounter = _extends({}, typingCounter);
//
//                 newTypingCounter = _extends({}, newTypingCounter, (_extends3 = {}, _extends3[_id3] = _extends({}, newTypingCounter[_id3], (_extends2 = {}, _extends2[person] = Date.now(), _extends2)), _extends3));
//                 setTypingCounter(newTypingCounter);
//                 props.onTyping && props.onTyping(_id3, person);
//             }
//
//             return Promise.resolve();
//         } catch (e) {
//             return Promise.reject(e);
//         }
//     };
//
//     var didMountRef = useRef(false);
//
//     var _useState = useState(Date.now()),
//         now = _useState[0],
//         setNow = _useState[1];
//
//     var _useState2 = useState(Date.now() + minSocketLag),
//         shouldPongBy = _useState2[0],
//         setShouldPongBy = _useState2[1];
//
//     var _useContext = useContext(ChatEngineContext$1),
//         connecting = _useContext.connecting,
//         setConnecting = _useContext.setConnecting,
//         conn = _useContext.conn,
//         sessionToken = _useContext.sessionToken,
//         chats = _useContext.chats,
//         setChats = _useContext.setChats,
//         messages = _useContext.messages,
//         setMessages = _useContext.setMessages,
//         activeChat = _useContext.activeChat,
//         setActiveChat = _useContext.setActiveChat,
//         typingCounter = _useContext.typingCounter,
//         setTypingCounter = _useContext.setTypingCounter,
//         isBottomVisible = _useContext.isBottomVisible;
//
//     useEffect(function () {
//         if (!didMountRef.current) {
//             didMountRef.current = true;
//         }
//     }, []);
//     useEffect(function () {
//         if (now > shouldPongBy) {
//             console.log('pingIntervalID', pingIntervalID);
//             console.log('timeIntervalID', timeIntervalID);
//             console.log('shouldPongBy', shouldPongBy);
//             console.log('now', now);
//
//             if (didMountRef.current && !connecting) {
//                 console.log('didMountRef.current', didMountRef.current);
//                 console.log('connecting', connecting);
//                 props.reRender && props.reRender();
//             }
//
//             setConnecting(true);
//             props.reRender && props.reRender();
//             setShouldPongBy(Date.now() + minSocketLag);
//         }
//     }, [now, shouldPongBy]);
//     useEffect(function () {
//         return function () {
//             clearInterval(pingIntervalID);
//             clearInterval(timeIntervalID);
//         };
//     }, []);
//
//     function sortChats(chats) {
//         return Object.values(chats).sort(function (a, b) {
//             var aDate = a.last_message.created ? getDateTime(a.last_message.created, props.offset) : getDateTime(a.created, props.offset);
//             var bDate = b.last_message.created ? getDateTime(b.last_message.created, props.offset) : getDateTime(b.created, props.offset);
//             return new Date(bDate) - new Date(aDate);
//         });
//     }
//
//     function onConnect(conn) {
//         setConnecting(false);
//
//         if (connecting) {
//             pingIntervalID = setInterval(function () {
//                 try {
//                     socketRef.sendMessage(JSON.stringify('ping'));
//                 } catch (e) {
//                     console.log('Socker error', e);
//                 }
//             }, pingInterval);
//             timeIntervalID = setInterval(function () {
//                 return setNow(Date.now());
//             }, 1000);
//         }
//
//         getLatestChats$1(conn, 25, function (chats) {
//             return setChats(_.mapKeys(chats, 'id'));
//         });
//
//         if (Date.now() > reconnect || conn.renderChatFeed) {
//             getLatestMessages$1(conn, activeChat, 45, function (id, list) {
//                 setMessages(_extends({}, messages, _.mapKeys(list, 'created')));
//             });
//         }
//
//         props.onConnect && props.onConnect(conn);
//     }
//
//     function handleEditChat(chat) {
//         if (chats) {
//             var newChats = _extends({}, chats);
//
//             newChats[chat.id] = chat;
//             setChats(newChats);
//         }
//
//         props.onEditChat && props.onEditChat(chat);
//     }
//
//     var development = props.development;
//     var wsStart = development ? 'ws://' : 'wss://';
//     var rootHost = development ? '127.0.0.1:8000' : 'api.chatengine.io';
//     return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DataLoader, props), sessionToken !== '' && /*#__PURE__*/React.createElement(WebSocket, {
//         reconnect: true,
//         childRef: function childRef(ref) {
//             return socketRef = ref;
//         },
//         url: "" + wsStart + rootHost + "/person_v4/?session_token=" + sessionToken,
//         onOpen: onConnect.bind(_this, props),
//         onClose: function onClose() {
//             console.log('Socket Closed');
//             setConnecting(true);
//             props.reRender && props.reRender();
//         },
//         onError: function onError(e) {
//             return console.log('Socket Error', e);
//         },
//         onMessage: handleEvent.bind(_this),
//         reconnectIntervalInMilliSeconds: 3000
//     }));
// };
//
// var Socket$1 = function Socket$1(props) {
//     var _useState = useState(false),
//         hide = _useState[0],
//         setHide = _useState[1];
//
//     function _reRender() {
//         setHide(true);
//         console.log('Hiding');
//         setTimeout(function () {
//             console.log('Not hiding');
//             setHide(false);
//         }, 100);
//     }
//
//     if (hide) {
//         return /*#__PURE__*/React.createElement("div", null);
//     } else {
//         return /*#__PURE__*/React.createElement(Socket, _extends({}, props, {
//             reRender: function reRender() {
//                 return _reRender();
//             }
//         }));
//     }
// };
//
// function _extends() {
//     _extends = Object.assign || function (target) {
//         for (var i = 1; i < arguments.length; i++) {
//             var source = arguments[i];
//
//             for (var key in source) {
//                 if (Object.prototype.hasOwnProperty.call(source, key)) {
//                     target[key] = source[key];
//                 }
//             }
//         }
//
//         return target;
//     };
//
//     return _extends.apply(this, arguments);
// }
//
// export default ChatEngineCopy
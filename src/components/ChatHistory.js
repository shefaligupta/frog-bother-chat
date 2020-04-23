import React, {useEffect, useRef} from 'react';

/**
 * ChatHistory Class
 *
 * @param {Array} chatHistory
 * @returns {*}
 * @constructor
 */
const ChatHistory = ({chatHistory}) => {
  const messagesEndRef = useRef(null);

  /**
   * scrolls to bottom of the chat history.
   */
  const scrollToBottom = () => {
    if (messagesEndRef && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };
  useEffect(scrollToBottom, [chatHistory]);

  return (
      <div className="chat-history">
        {
          chatHistory
          && chatHistory.length > 0
          && chatHistory.map((chat) => (
              <div key={`message-${chat.timePeriod}`} className="message">
                <div key={`timestamp-${chat.timePeriod}`} className="message-time">{chat.timePeriod}</div>
                <div key={`mesg-${chat.timePeriod}`}>{chat.message}</div>
              </div>
          ))
        }
        <div ref={messagesEndRef}/>
      </div>
  );
};

export default ChatHistory;

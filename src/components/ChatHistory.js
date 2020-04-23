import React, {useEffect, useRef} from 'react';

/**
 * ChatHistory Class
 *
 * @param {Array} chatHistory
 * @returns {*}
 * @constructor
 */
function ChatHistory({chatHistory}) {
  const messagesEndRef = useRef(null)

  /**
   * scrolls to bottom of the chat history.
   */
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({behavior: "smooth"})
  }
  useEffect(scrollToBottom, [chatHistory]);

  return (
      <div className="chat-history">
        {
          chatHistory &&
          chatHistory.length > 0 &&
          chatHistory.map((chatHistory, index) => (
              <div key={`message-${index}`} className="message">
                <div key={`timestamp-${index}`} className="message-time">{chatHistory.timePeriod}</div>
                <div key={`mesg-${index}`}>{chatHistory.message}</div>
              </div>
          ))
        }
        <div ref={messagesEndRef}/>
      </div>
  );
}

export default ChatHistory;
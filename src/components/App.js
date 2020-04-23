import React, {useRef, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import '../css/App.css';
import HenchmenList from "./HenchmenList";
import ChatHistory from "./ChatHistory";

/**
 * App Class
 * @returns {*}
 * @constructor
 */
function App() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState(new Map());
  const [henchman, setHenchman] = useState('Sonny');

  const inputEl = useRef(null);

  /**
   * sets focus on message input box.
   */
  const setFocus = () => {
    inputEl.current.focus();
  };

  /**
   * sends the message i.e. calls the setter for chatHistory map
   * which in turn runs the UI update.
   */
  const sendMessage = () => {
    const newMessage = {
      timePeriod: new Date().toUTCString(),
      message,
      henchman,
    };
    const chat = chatHistory.get(henchman) || [];
    setChatHistory(chatHistory.set(henchman, [...chat, newMessage]));
    setMessage('');
  }

  /**
   * sends message on enter.
   *
   * @param {Object} event
   */
  const sendMessageOnEnter = (event) => {
    if (event.key === 'Enter' && henchman) {
      setMessage(event.target.value);
      sendMessage();
    }
  }

  /**
   * sets henchman name and focus on message input box.
   *
   * @param {string} name
   */
  const setHenchmanAndFocus = (name) => {
    setHenchman(name);
    setFocus();
  }

  return (
      <div className="app">
        <header className="app-header">
          <h4 className="app-title">Frog Bother Chat</h4>
          <h4>Vito Croakleone</h4>
        </header>
        <div className="chat-window">
          <HenchmenList setHenchman={(name) => setHenchmanAndFocus(name)} man={henchman}/>
          <ChatHistory chatHistory={chatHistory.get(henchman)}/>
        </div>
        <div className="write-message">
          <TextField
              className="type-message"
              id="message-value"
              value={message}
              label="Message"
              variant="outlined"
              onChange={(event) => setMessage(event.target.value)}
              onKeyPress={(event) => sendMessageOnEnter(event)}
              inputRef={inputEl}
          />
          <Button
              disableElevation
              variant="contained"
              className="send-message"
              disabled={henchman.length === 0}
              onClick={(event) => sendMessage(event)}
          >
            Send
          </Button>
        </div>
      </div>
  );
}

export default App;

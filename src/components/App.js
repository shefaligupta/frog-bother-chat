import React, {useRef, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../css/App.css';
import HenchmenList from './HenchmenList';
import ChatHistory from './ChatHistory';

/**
 * App Class
 * @returns {*}
 * @constructor
 */
const App = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState(new Map());
  const [henchman, setHenchman] = useState('Sonny');

  const inputEl = useRef(null);

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
    let chatForHenchman = chat.get(henchman) || {draft: '', history: []};
    chatForHenchman = {
      history: [...chatForHenchman.history, newMessage],
      draft: '',
    };
    setChat(chat.set(henchman, chatForHenchman));
    setMessage('');
  };

  /**
   * sends message on enter.
   *
   * @param {Object} event
   */
  const sendMessageOnEnter = (event) => {
    if (event.key === 'Enter' && henchman && message.length > 0) {
      setMessage(event.target.value);
      sendMessage();
    }
  };

  /**
   * sets henchman name and focus on message input box.
   *
   * @param {string} name
   */
  const setHenchmanAndFocus = (name) => {
    const chatForHenchman = chat.get(name);
    const draft = chatForHenchman ? chatForHenchman.draft : '';
    setMessage(draft);
    setHenchman(name);
    inputEl.current.focus();
  };

  /**
   * get chat history for henchman.
   *
   * @returns {*}
   */

  const getChatHistory = () => {
    const chatForHenchman = chat.get(henchman);
    return chatForHenchman ? chatForHenchman.history : undefined;
  };

  /**
   * sets drafts message for the henchman.
   *
   * @param {Object} event
   */
  const setChatDraftForHenchman = (event) => {
    const chatForHenchman = chat.get(henchman) || {draft: '', history: []};
    chatForHenchman.draft = event.target.value;
    setChat(chat.set(henchman, chatForHenchman));
    setMessage(event.target.value);
  };

  return (
      <div className="app">
        <header className="app-header">
          <h4 className="app-title">Frog Bother Chat</h4>
          <h4>Vito Croakleone</h4>
        </header>
        <div className="chat-window" alt="chat-window">
          <HenchmenList setHenchman={(name) => setHenchmanAndFocus(name)} man={henchman}/>
          <ChatHistory chatHistory={getChatHistory()}/>
        </div>
        <div className="write-message">
          <TextField
              className="type-message"
              value={message}
              label="message-input"
              aria-labelledby="message-input"
              variant="outlined"
              onChange={(event) => setChatDraftForHenchman(event)}
              onKeyPress={(event) => sendMessageOnEnter(event)}
              inputRef={inputEl}
          />
          <Button
              disableElevation
              variant="contained"
              className="send-message"
              disabled={henchman.length === 0 || message.length === 0}
              onClick={(event) => sendMessage(event)}
          >
            Send
          </Button>
        </div>
      </div>
  );
};

export default App;

import React from 'react';
import Message from './Message';
import UseGetMessages from '../Hooks/UseGetMessages';
import {useSelector} from 'react-redux'
const Messages = () => {
  UseGetMessages()
  const {messages} = useSelector(store=>store.message)
  console.log('message is',messages)
  if(!messages) return null;
  return (
    <div className='px-4 flex-1 overflow-auto'>
          {Array.isArray(messages) ? (
            messages.map(message => (
              <Message key={message._id} message={message} />
            ))
          ) : (
            <Message key={messages._id} message={messages} />
          )}
    </div>
  );
};

export default Messages;

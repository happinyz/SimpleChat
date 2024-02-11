'use client'

import { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, db } from "@/lib/firebase/firebase";
import { collection, getGlobalMessages, query } from "@/lib/firebase/firestore";
import { getDocs } from 'firebase/firestore'
import { sendChat } from "@/lib/chat/chat";;
import ChatBox from './ChatBox';
import styles from './chat.module.css'


export default function Page() {

  const globalMessages = collection('global-messages');
  const messagesQuery = getGlobalMessages(25);
  const [messages] = useCollectionData(messagesQuery)

  const [input, setInput] = useState('');

  const handleSubmitChat = async (event: any) => {
    event.preventDefault();
    await sendChat(globalMessages, input);
  }

  return (
    <div>
      <header>chat</header>
      <div>
        {
          messages && messages.map(msg => (<div>{msg.text}</div>))
        }
      </div>
      <div className={styles.chatContainer}>
        <form onSubmit={handleSubmitChat}>
          <input
            className={styles.chatInput}
            placeholder="Type a message here..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </form>
      </div>
    </div>
  )
}
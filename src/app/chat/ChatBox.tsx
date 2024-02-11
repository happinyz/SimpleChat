'use client'

import styles from './chat.module.css'

export default function ChatBox() {
  return (
    <input className={styles.chatInput} placeholder="Type a message here..."></input>
  )
}
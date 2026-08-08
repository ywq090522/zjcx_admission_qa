import { useState } from 'react'
import styles from './ChatInput.module.css'

interface ChatInputProps {
  onSend: (content: string) => void
}

function ChatInput({ onSend }: ChatInputProps) {
  const [text, setText] = useState('')

  const handleSend = () => {
    if (text.trim() === '') return
    onSend(text)
    setText('')
  }

  return (
    <div>
      <input
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleSend}
        className={styles.seedButton}
      >
        发送
      </button>
    </div>
  )
}

export default ChatInput
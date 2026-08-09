import { useState } from 'react'
import styles from './ChatInput.module.css'

interface ChatInputProps {
  onSend: (content: string) => void
}

function ChatInput({ onSend }: ChatInputProps) {
  const [text, setText] = useState('')

  const handleSend = () => {
    onSend(text)
    setText('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div>
      <textarea
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="请输入问题..."
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSend}
        className={styles.seedButton}
        disabled={!text.trim()}
      >
        发送
      </button>
    </div>
  )
}

export default ChatInput
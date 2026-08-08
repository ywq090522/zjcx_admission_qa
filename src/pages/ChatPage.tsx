import { useState } from 'react'
import { MessageBubble, ChatInput } from '@/components'
import styles from './ChatPage.module.css'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: '你好，有什么可以帮你了解招生政策的？' },
    { id: '2', role: 'user', content: '今年云计算专业还招生吗？' }
  ])

  function handleSend(content: string) {
    setMessages([...messages, { id: Date.now().toString(), role: 'user', content }])
  }

  return (
    <div className={styles.chatPage}>
      <div className={styles.messageList}>
        {
          messages.map(
            ({ id, role, content }) => (
              <MessageBubble
                key={id}
                role={role}
                content={content}
              />
            ))
        }
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  )
}

export default ChatPage
import styles from './MessageBubble.module.css'

interface MessageBubbleProps {
  role: 'user' | 'assistant'
  content: string
}

function MessageBubble({ role, content }: MessageBubbleProps) {
  return (
    <div className={`${styles.messageRow} ${styles[role]}`}>
      <div className={styles.bubble}>
        <p>{role}</p>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default MessageBubble
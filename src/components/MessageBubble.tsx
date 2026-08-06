import './MessageBubble.css'

interface MessageBubbleProps {
  role: 'user' | 'assistant'
  content: string
}

function MessageBubble({ role, content }: MessageBubbleProps) {
  return (
    <div className={`message-row ${role}`}>
      <div className='bubble'>
        <p>{role}</p>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default MessageBubble

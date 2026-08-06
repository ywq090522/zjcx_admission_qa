import { useState } from 'react'

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
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSend}>发送</button>
    </div>
  )
}

export default ChatInput

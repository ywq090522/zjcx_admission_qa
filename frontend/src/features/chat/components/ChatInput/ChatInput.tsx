import { useEffect, useRef, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import styles from './ChatInput.module.scss'

interface ChatInputProps {
  onSend: (content: string) => void
}

function ChatInput({ onSend }: ChatInputProps) {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const textLength = text.length
  const maxLength = 100

  const autoResize = () => {
    const textarea = textareaRef.current
    if (!textarea) return

    textarea.style.height = '0px'
    textarea.style.height = `${textarea.scrollHeight}px`
  }

  const getColorClass = (length: number) => {
    if (length >= maxLength) return styles.error
    if (length >= maxLength * 0.8) return styles.warning
    if (length === 0) return ''
    return styles.success
  }

  useEffect(() => {
    autoResize()
  }, [text])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleSend = () => {
    if (!text.trim()) return
    onSend(text)
    setText('')

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className={styles.chatInput}>
      <div className={styles.inputWrapper}>
        <textarea
          ref={textareaRef}
          className={`${styles.inputField} ${styles.clearInput}`}
          value={text}
          onChange={handleChange}
          placeholder="请输入问题..."
          onKeyDown={handleKeyDown}
          rows={1}
          maxLength={maxLength}
          spellCheck={false}
        />
        <span
          className={`${styles.wordCount} ${getColorClass(textLength)}`}
          aria-label={`当前输入 ${textLength} 个字，上限 ${maxLength} 个字`}
        >
          {`${textLength} / ${maxLength}`}
        </span>
        <button
          onClick={handleSend}
          className={styles.seedButton}
          disabled={!text.trim()}
          aria-label="发送消息"
          title="发送 (Enter)"
        >
          <ArrowUp />
        </button>
      </div>
    </div>
  )
}

export default ChatInput
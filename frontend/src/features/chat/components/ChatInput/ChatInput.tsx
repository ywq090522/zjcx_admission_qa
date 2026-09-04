import { ArrowUp } from 'lucide-react'
import { useInput } from '@/hooks'
import styles from './ChatInput.module.scss'

interface ChatInputProps {
  onSend: (content: string) => void
}

function ChatInput({ onSend }: ChatInputProps) {
  const {
    handleChange,
    handleKeyDown,
    handleSend,
    maxLength,
    text,
    textLength,
    textareaRef,
  } = useInput({ maxLength: 100, onSend })

  const getColorClass = (length: number) => {
    if (length >= maxLength) return styles.error
    if (length >= maxLength * 0.8) return styles.warning
    if (length === 0) return styles.none
    return styles.success
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

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from 'react'

interface UseInputProps {
  maxLength: number
  onSend: (content: string) => void
}

function useInput({ maxLength = 100, onSend }: UseInputProps) {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const scrollToVisible = useCallback(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    requestAnimationFrame(() => {
      setTimeout(() => {
        textarea.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      })
    })
  }, [])

  const autoResize = useCallback(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    textarea.style.height = 'auto'
    const newHeight = Math.min(textarea.scrollHeight, 200)
    textarea.style.height = `${newHeight}px`
  }, [])

  useEffect(() => {
    autoResize()
  }, [autoResize, text])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value.slice(0, maxLength))
    },
    [maxLength]
  )

  const handleSend = useCallback(() => {
    const content = text.trim()
    if (!content) return

    onSend(content)
    setText('')

    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.focus()
      scrollToVisible()
    }

  }, [onSend, text, scrollToVisible])

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }, [handleSend])

  return {
    handleChange,
    handleKeyDown,
    handleSend,
    maxLength,
    text,
    textLength: text.length,
    textareaRef,
    setText
  }
}

export default useInput

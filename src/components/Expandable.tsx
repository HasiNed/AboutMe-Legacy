'use client'
import { useState } from 'react'

export default function Expandable({
  children,
  expandMessage = '(Expand)',
  hiddenMessage = '(Hide)',
  maxHeight = 200,
  defaultVisible = false,
}: {
  children: React.ReactNode
  expandMessage?: string
  hiddenMessage?: string
  maxHeight?: number
  defaultVisible?: boolean
}) {
  const [visible, setVisible] = useState(defaultVisible)
  return (
    <>
      <span onClick={() => setVisible(!visible)}>
        {visible ? hiddenMessage : expandMessage}
      </span>
      <div
        style={{
          transition: 'opacity 200ms, max-height 200ms',
          opacity: visible ? 1 : 0,
          maxHeight: visible ? maxHeight : 0,
          overflowY: 'hidden',
        }}
      >
        {children}
      </div>
    </>
  )
}

'use client'
import Image, { type ImageProps } from 'next/image'
import { useState } from 'react'

export default function HoverImage({
  children,
  ...props
}: ImageProps & { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false)
  return (
    <div
      style={{
        display: 'inline-block',
      }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <span>{children}</span>
      <div
        style={{
          zIndex: 1,
          position: 'absolute',
          transition: 'opacity 100ms, visibility 100ms',
          visibility: visible ? 'visible' : 'hidden',
          opacity: visible ? 1 : 0,
        }}
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image {...props} />
      </div>
    </div>
  )
}

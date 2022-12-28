import React from 'react'
import '../styles/globals.css'

export default function layout({ children }: {children: React.ReactNode}) {
  return (
    <html>
      <body>
        { children }
      </body>
    </html>
  )
}

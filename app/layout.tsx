import React from 'react'
import '../styles/globals.css'
import MonitorSession from './components/monitor-session'
import NavBar from './components/nav-bar'
import Provider from './provider'

export default function layout({ children }: {children: React.ReactNode}) {
  return (
    <html>
      <body>
        <Provider>
          <MonitorSession></MonitorSession>
          <NavBar></NavBar>
          { children }
        </Provider>
      </body>
    </html>
  )
}

import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'

import { GlobalStyle } from './styles/global'
import { defaultTheme, LightTheme } from './styles/theme/default'

export function App() {
  const [toogleDarkTheme, setToogleDarkTheme] = useState(false)
  return (
    <ThemeProvider
      theme={toogleDarkTheme === false ? defaultTheme : LightTheme}
    >
      <Home onUpdateTheme={(value) => setToogleDarkTheme(!value)} />

      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

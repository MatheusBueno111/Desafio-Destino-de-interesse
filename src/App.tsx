import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

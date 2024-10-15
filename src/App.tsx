import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { InformationsProvider } from './context/InformationsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <InformationsProvider>
          <Router />
        </InformationsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

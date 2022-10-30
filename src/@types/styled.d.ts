import 'styled-components'
import { DarkTheme, defaultTheme } from '../styles/theme/default'

type ThemeType = typeof defaultTheme
type ThemeTypeDark = typeof DarkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypeDark {}
}

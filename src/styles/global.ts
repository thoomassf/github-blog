import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  // Zerar espaçamentos padrões
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Definir cor de fundo da tela
  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-title']};
    -webkit-font-smoothing: antialiased;
  }

  // Definir estilo padrão da fonte
  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }
`

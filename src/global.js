import { createGlobalStyle } from 'styled-components';

const montserratFont = "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&display=swap";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: url(${montserratFont}) format('Montserrat'), 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }

  p {
    color: ${({ theme }) => theme.p_text}
  }
`;
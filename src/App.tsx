import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Cover } from "./components/Cover";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Cover />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

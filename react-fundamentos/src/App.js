import React, {
  useState,
  useMemo,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

import themes from "./styles/themes/index";

function App() {
  const [theme, setTheme] = useState("dark");
  const firstRender = useRef(true);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevStates) => (prevStates == "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    console.debug({ theme });
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />

      <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
    </ThemeProvider>
  );
}

export default App;

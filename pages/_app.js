import GlobalStyle from "../src/components/GlobalStyle";

function App({Component, pageProps}) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App;

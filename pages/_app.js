import GlobalStyle from "../src/style/GlobalStyle";

function App({Component, pageProps}) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App;

import GlobalStyle from "../components/GlobalStyle";

function App({Component, pageProps}) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App;

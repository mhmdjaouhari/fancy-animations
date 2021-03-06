import "../styles/globals.css";
import Container from "@material-ui/core/Container";

function MyApp({ Component, pageProps }) {
  return (
    <Container maxWidth="sm">
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;

import "bootstrap/dist/css/bootstrap.min.css";
import Elements from "../styles/base/elements";
import Reset from "../styles/generic/reset";
import Gaps from "../styles/tools/gaps";

const MyApp = ({ Component, pageProps }) => {
  return (
    <main>
      <Gaps />
      <Reset />
      <Elements />

      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;

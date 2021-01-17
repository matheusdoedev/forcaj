import Elements from "../styles/base/elements";
import Reset from "../styles/generic/reset";
import Gaps from "../styles/tools/gaps";

import { AuthContextComponent } from "../contexts/auth";
import { EscolasContextComponent } from "../contexts/escolas";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthContextComponent>
      <EscolasContextComponent>
        <Gaps />
        <Reset />
        <Elements />

        <Component {...pageProps} />
      </EscolasContextComponent>
    </AuthContextComponent>
  );
};

export default MyApp;

import Elements from "./styles/base/elements";
import Reset from "./styles/generic/reset";
import Gaps from "./styles/tools/gaps";

import { AuthContextComponent } from "./contexts/auth";
import { EscolasContextComponent } from "./contexts/escolas";

import Routes from "./routes.js";

const App = () => {
  return (
    <AuthContextComponent>
      <EscolasContextComponent>
        <Gaps />
        <Reset />
        <Elements />

        <Routes />
      </EscolasContextComponent>
    </AuthContextComponent>
  );
};

export default App;

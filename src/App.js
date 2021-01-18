import Elements from "./styles/base/elements";
import Reset from "./styles/generic/reset";
import Gaps from "./styles/tools/gaps";

import { AuthContextComponent } from "./contexts/auth";

import Routes from "./routes.js";

const App = () => {
  return (
    <AuthContextComponent>
      <Gaps />
      <Reset />
      <Elements />

      <Routes />
    </AuthContextComponent>
  );
};

export default App;

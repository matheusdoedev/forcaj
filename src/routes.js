import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "./pages/Index";

import EncontreUmMentor from "./pages/EncontreUmMentor";
import EncontreUmaVaga from "./pages/EncontreUmaVaga";
import EncontreUmaBolsa from "./pages/EncontreUmaBolsa";

import CadastroMentor from "./pages/cadastro/Mentor";
import CadastroUsuario from "./pages/cadastro/Usuario";
import CadastroDoadorDeBolsa from "./pages/cadastro/DoadorDeBolsa";

import CadastroDivulgadorDeVagas from "./pages/cadastro/DivulgadorDeVagas";
import LoginUsuario from "./pages/auth/LoginUsuario";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />

        <Route path="/cadastro/mentor" component={CadastroMentor} />
        <Route path="/cadastro/usuario" component={CadastroUsuario} />
        <Route
          path="/cadastro/doador-de-bolsa"
          component={CadastroDoadorDeBolsa}
        />
        <Route
          path="/cadastro/divulgador-de-vagas"
          component={CadastroDivulgadorDeVagas}
        />

        <Route path="/auth/login-usuario" component={LoginUsuario} />

        <Route path="/encontre-um-mentor" component={EncontreUmMentor} />
        <Route path="/encontre-uma-bolsa" component={EncontreUmaBolsa} />
        <Route path="/encontre-uma-vaga" component={EncontreUmaVaga} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

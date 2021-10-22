import { Route, Switch } from 'react-router-dom';
import TodosPoke from "./pages/TodosPoke";
import Favoritos from "./pages/Favoritos";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <TodosPoke></TodosPoke>
        </Route>
        <Route path="/favoritos" exact={true}>
          <Favoritos></Favoritos>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

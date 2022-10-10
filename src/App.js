import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

// Note: in index.js the whole app component must be wrapped in reacts <BrowserRouter>
// Without using <Switch> it would render the "/" page for everything since its contained in all path strings
// Without the exact={true} keyword, it would only render the "/" page since switch looks for first occurrence that contains that string, then stops
// try it out by removing these things.

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

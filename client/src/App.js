import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Provider } from "react-redux";
import store from "./utils/store";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import 'semantic-ui-css/semantic.min.css';
import 'animate.css';
import CreatePlants from './pages/CreatePlants';

const httpLink = createHttpLink({
  uri: "graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <>
      <div className="wrapper">
        <ApolloProvider client={client}>
          <Router>
            <Provider store={store}>
              <Routes>
                <Route path="/create" element={<CreatePlants />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Home />} />
                {/* <Route index element={<Home />} /> */}
              </Routes>
            </Provider>
          </Router>
        </ApolloProvider>
      </div>
    </>
  );
}

export default App;

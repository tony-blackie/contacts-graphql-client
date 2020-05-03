import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://192.168.0.107:4000",
});

function App() {
  useEffect(() => {
    client
      .query({
        query: gql(`
        {
          contacts {
            firstName
            lastName
            email
          }
        }
      `),
      })
      .then((response) => {
        debugger;
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

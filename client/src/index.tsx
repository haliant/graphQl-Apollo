import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "antd/dist/antd.css";

import App from "./App";
import "./index.css";

const client = new ApolloClient({
    uri: "http://localhost:5050/graphql",
    cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <ApolloProvider client={client}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ApolloProvider>
);

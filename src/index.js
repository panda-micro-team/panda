import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import ApolloProvider from "./contexts/ApolloProvider.js";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <HashRouter>
        <ApolloProvider>
          <App />
        </ApolloProvider>
      </HashRouter>
    </React.StrictMode>,
  );
}

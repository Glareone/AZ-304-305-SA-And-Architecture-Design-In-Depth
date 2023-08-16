import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import { useAppHook } from "./azure-login/azure-login-hook"
import "./App.css"

function App() {
  const { subscriptionDetails } = useAppHook()

  return (
    <div className="App">
      <header className="App-header">
        <p>clientId: {import.meta.env.VITE_AZURE_CLIENT_ID}</p>
        <p>tenantId: {import.meta.env.VITE_AZURE_TENANT_ID}</p>
        clientSecret: {import.meta.env.VITE_AZURE_CLIENT_SECRET}
        <p>subscriptiondetails: {subscriptionDetails.map(el => (<p>{el.displayName}</p>))}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  )
}

export default App

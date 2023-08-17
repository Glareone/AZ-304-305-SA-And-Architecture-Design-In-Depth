import { useAppHook } from "./azure-login/azure-login-hook"
import "./App.css"

function App() {
  const { subscriptionDetails } = useAppHook()

  return (
    <div className="App">
      <header className="App-header">
        <p>clientId: {import.meta.env.VITE_AZURE_CLIENT_ID}</p>
        <p>tenantId: {import.meta.env.VITE_AZURE_TENANT_ID}</p>
        <p>clientSecret: {import.meta.env.VITE_AZURE_CLIENT_SECRET}</p>
        <p> token (subscription) details: {subscriptionDetails.map(el => (<p>{el.displayName}</p>))}</p>
      </header>
    </div>
  )
}

export default App

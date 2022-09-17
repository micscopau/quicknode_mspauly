import { UserContextProvider } from '../contexts/UserContext'
import WalletConnection from './wallet/WalletConnection'

function App(): JSX.Element {

  return (
    <div className="app">
      <h2 className="header">
        icy.tools - Trending Collections App
      </h2>

        <UserContextProvider>
          <WalletConnection />
        </UserContextProvider>
    </div>
  )
}

export default App

import { UserContextProvider } from '../contexts/UserContext'
import TrendingContent from './trending/TrendingContent'
import WalletConnection from './wallet/WalletConnection'

function App(): JSX.Element {

  return (
    <div className="app">
      <h2 className="header">
        icy.tools - Trending Collections App
      </h2>

        <UserContextProvider>
          <WalletConnection />

          <TrendingContent />
        </UserContextProvider>
    </div>
  )
}

export default App

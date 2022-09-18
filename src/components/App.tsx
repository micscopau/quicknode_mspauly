import { UserContextProvider } from '../contexts/UserContext'
import TrendingContent from './querycontent/TrendingContent'
import WalletConnection from './wallet/WalletConnection'

function App(): JSX.Element {

  return (
    <div className="app">
      <h2 className="header">
        icy.tools - Trending Collections App
      </h2>

        <UserContextProvider>
          <WalletConnection />
          {/* TODO QN4: Add switch to render content based on page/filter */}
          <TrendingContent />
        </UserContextProvider>
    </div>
  )
}

export default App

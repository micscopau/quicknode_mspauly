import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext"
import { truncateAddress } from "../../utils/functions";
import { ConnectButton } from "./ConnectButton";

function WalletConnection(): JSX.Element {
  const userContext = useContext(UserContext);

  return (
    <div className="wallet-connection">
      <div className="status">
        Status: {userContext.walletStatus}
      </div>
      <div className="address">
        Address: {userContext.userAddress ? truncateAddress(userContext.userAddress) : ""}
      </div>
      <ConnectButton />
    </div>
  )
}

export default WalletConnection
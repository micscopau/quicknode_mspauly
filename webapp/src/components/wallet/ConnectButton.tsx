import { useContext } from "react";
import { isNull } from "util";
import { METAMASK_MISSING_MESSAGE } from "../../common/constants";
import { WalletStatuses } from "../../common/types";
import { UserContext } from "../../contexts/UserContext";
import { isNullOrUndefined } from "../../utils/functions";

export function ConnectButton(): React.ReactElement {
  const userContext = useContext(UserContext);
  const disableConnectButton = userContext.walletStatus === WalletStatuses.MISSING;
  const isConnected = !isNullOrUndefined(userContext.userAddress);

  function connectDisabledClick(): void {
    console.warn("Install Metamask please.");
  }

  return (
    <div className="connect-wallet-button-wrapper"   
      title={ disableConnectButton ? METAMASK_MISSING_MESSAGE : "" } 
      onClick={ disableConnectButton ? connectDisabledClick : (): void => {/*noOp*/} }
    >
      <button
        disabled={ disableConnectButton }
        className="connect-wallet-button"
        type="button"
        onClick={isConnected ? userContext.disconnectWallet : userContext.connectWallet }
      >
        {isConnected ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
}

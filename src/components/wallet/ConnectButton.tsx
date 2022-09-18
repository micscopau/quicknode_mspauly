import { useContext } from "react";
import { METAMASK_MISSING_MESSAGE } from "../../common/constants";
import { eWalletStatuses } from "../../common/types";
import { UserContext } from "../../contexts/UserContext";
import { isNullOrUndefined } from "../../utils/functions";

export function ConnectButton(): React.ReactElement {
  const userContext = useContext(UserContext);
  const disableConnectButton = userContext.walletStatus === eWalletStatuses.MISSING;
  const isConnected = !isNullOrUndefined(userContext.userAddress);

  //TODO QN5: Turn this into a popup/toast to display to the user for feedback on why
  // the "connect" button is disabled
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

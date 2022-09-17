import React, { Component, createContext } from "react";
import Web3 from "web3";
import { WalletStatuses } from "../common/types";

const noOp = (): void => {/*noOp*/};

const WEB_3_NETWORK_ID = process.env.VITE_APP_NETWORK_ID;

const userStateInitial: iUserState = {
  userAddress: undefined,
  userBalance: 0,

  walletStatus: WalletStatuses.DISCONNECTED,

  connectWallet: noOp,
  disconnectWallet: noOp,
};

interface iUserState {
  userAddress: string | undefined, // The user's address
  userBalance: number;

  walletStatus: WalletStatuses | undefined,

  connectWallet: () => void,
  disconnectWallet: () => void,
}

interface iUserProps {
  children: React.ReactNode;
}

export const UserContext = createContext<iUserState>(userStateInitial);

export class UserContextProvider extends Component<iUserProps, iUserState> {

  private web3: Web3 = new Web3();

  constructor(props: iUserProps) {
    super(props);

    this.state = { ...userStateInitial };
  }

  render(): React.ReactElement {
    return (
      <UserContext.Provider value = { { 
        ...this.state , 
        connectWallet: this.connectWallet,
        disconnectWallet: this.disconnectWallet,
        } } 
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }

  componentDidMount(): void {
    const ethers = window.ethereum;
    const ethereumDefined =  ethers !== undefined;

    if(ethereumDefined){
      this.web3 = new Web3(window.ethereum);
      this._checkNetwork();
    } else {
      this.setState({
        walletStatus: WalletStatuses.MISSING
      })
    }
  }

  componentWillUnmount(): void {
    this.disconnectWallet();
  }

  _resetState(): void {
    this.setState({ ...userStateInitial });
  }

  // This method checks if Metamask is on the correct network
  async _checkNetwork(): Promise<boolean> {
    const { walletStatus } = this.state;

    if( this.web3 ) {
      if ((await this.web3.eth.net.getId()).toString() === WEB_3_NETWORK_ID) {
        return true;
      }
      if(walletStatus === WalletStatuses.MISSING) {
        return false;
      }
      
    } else {
      this.setState({
        walletStatus: WalletStatuses.MISSING,
      })
      return false;
    }

    // TODO: Prompt user to switch networks

    // this.setState({ 
    //   errorMessage: WRONG_NETWORK_MESSAGE
    // });
    return false;
  }

  connectWallet = async (): Promise<void> => {
    console.log("connect wallet clicked")
    // It returns a promise that will resolve to the user's address.
    let userAddress = undefined;

    if (!this._checkNetwork()) {
      return;
    }

    try {
      [userAddress] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (err: any) {
      if( err.code === -32002 ) {
        this.setState({
          // errorMessage: "Connection request already pending. Check Metamask.",
          walletStatus: WalletStatuses.ERROR
        })
      }
      return
    }

    const userBalance = parseFloat(this.web3.utils.fromWei(await this.web3.eth.getBalance(userAddress), 'ether'));
    
    this.setState({ 
      userBalance,
      userAddress,
      walletStatus: WalletStatuses.CONNECTED,
    });
  }

  disconnectWallet = (): void => {
    console.log('disconnect wallet clicked')
    this._resetState();
  }
}

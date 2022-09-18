export enum eWalletStatuses {
  DISCONNECTED = "Disconnected",
  CONNECTED = "Connected",
  MISSING = "Wallet Missing",
  ERROR = "Error Connecting Wallet"
}

export interface tTrendingData {
  address: string,
  name: string,
  stats: {
    average: number,
    ceiling: number,
    floor: number,
    totalSales: number,
    volume: number
  }
}
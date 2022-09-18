import { tTrendingData } from "../common/types";

export function isNullOrUndefined(value: unknown): boolean {
  return value === undefined || value === null;
}

export function truncateAddress(address: string): string {
  return `${address.substring(0,3)}...${address.substring(address.length-3)}`
}

//TODO QN2: update type
export function flattenTrendingQueryData(object: any): tTrendingData[] {
  return object.trendingCollections.edges.map((item: any) => {
    return item.node;
  })
}
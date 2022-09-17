
export function isNullOrUndefined(value: unknown): boolean {
  return value === undefined || value === null;
}

export function truncateAddress(address: string): string {
  return `${address.substring(0,3)}...${address.substring(address.length-3)}`
}
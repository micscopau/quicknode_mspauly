import { createColumnHelper } from "@tanstack/react-table";
import { tTrendingData } from "../../../common/types";
import { truncateAddress } from "../../../utils/functions";

const columnHelper = createColumnHelper<tTrendingData>();

// TODO QN2: add strict typing here
export const trendingColumns = [
  columnHelper.accessor('name', {
    header: () => 'Name',
    cell: info => info.getValue()
  }),
  columnHelper.accessor('address', {
    header: () => 'Address',
    cell: info => truncateAddress(info.getValue())
  }),
  columnHelper.accessor('stats.average', {
    header: () => 'Average',
    cell: info => Math.round(info.getValue()*10000)/10000
  }),
  columnHelper.accessor('stats.ceiling', {
    header: () => 'Ceiling',
    cell: info => info.getValue()
  }),
  columnHelper.accessor('stats.floor', {
    header: () => 'Floor',
    cell: info => info.getValue()
  }),
  columnHelper.accessor('stats.totalSales', {
    header: () => 'Total Sales',
    cell: info => info.getValue()
  }),
  columnHelper.accessor('stats.volume', {
    header: () => 'Volume',
    cell: info => info.getValue()
  }),
]
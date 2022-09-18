import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

interface iTableProps<T> {
  data: T[]; 
  columns: any; // TODO QN2: update type
}

function ContentTable<T> (props: iTableProps<T>): JSX.Element {
  const { data, columns } = props;

  console.log('Table - data:', data, 'columns', columns);

  const table = useReactTable({
    data, columns, getCoreRowModel: getCoreRowModel(),
  });
  
  return(
    <div className="table-wrapper">
      <table>
      <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContentTable;
import { 
  TableContainer, 
  TableElement, 
  TableRow, 
  TableCell, 
  TableHeader,
  EmptyMessage,
  LoadingOverlay
} from "./styles";
import type { DS_TableProps, DS_TableColumn } from "./types";

export function DS_Table({
  columns,
  data,
  variant,
  isLoading,
  emptyMessage = "Não há dados para exibir",
  ...props
}: DS_TableProps) {
  const renderCell = (column: DS_TableColumn, rowData: any) => {
    const value = rowData[column.key];
    
    if (column.render) {
      return column.render(value, rowData);
    }
    
    return value;
  };

  return (
    <TableContainer>
      <TableElement variant={variant} {...props}>
        <thead>
          <TableRow isHeader data-testid="table-header-row">
            {columns.map((column) => (
              <TableHeader 
                key={column.key}
                width={column.width}
                data-testid={`header-${column.key}`}
              >
                {column.header}
              </TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <EmptyMessage data-testid="empty-message">
                  {emptyMessage}
                </EmptyMessage>
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, rowIndex) => (
              <TableRow key={rowIndex} data-testid={`table-row-${rowIndex}`}>
                {columns.map((column) => (
                  <TableCell 
                    key={`${rowIndex}-${column.key}`}
                    width={column.width}
                    data-testid={`cell-${rowIndex}-${column.key}`}
                  >
                    {renderCell(column, row)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </tbody>
      </TableElement>
      {isLoading && (
        <LoadingOverlay data-testid="loading-overlay">
          Carregando...
        </LoadingOverlay>
      )}
    </TableContainer>
  );
} 
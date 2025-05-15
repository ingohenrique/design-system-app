import { HTMLAttributes, ReactNode } from "react";

export interface DS_TableColumn {
  key: string;
  header: string;
  width?: string;
  render?: (value: any, rowData: any) => ReactNode;
}

export interface DS_TableProps extends HTMLAttributes<HTMLTableElement> {
  columns: DS_TableColumn[];
  data: any[];
  variant: "default" | "striped";
  isLoading?: boolean;
  emptyMessage?: string;
}

export interface DS_TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  isHeader?: boolean;
  isFooter?: boolean;
}

export interface DS_TableCellProps
  extends HTMLAttributes<HTMLTableCellElement> {
  isHeader?: boolean;
  width?: string;
}

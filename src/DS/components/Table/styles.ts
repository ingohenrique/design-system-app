import styled, { css } from "styled-components";
import { DS_TableCellProps, DS_TableProps, DS_TableRowProps } from "./types";
import { DS_Spacing } from "../../spacing";
import { DS_Colors } from "../../colors";

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: ${DS_Spacing.s2};
  box-shadow: 0 2px 8px ${DS_Colors.black[90]};
`;

export const TableElement = styled.table<DS_TableProps>`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 14px;

  ${(props) =>
    props.variant === "default" &&
    css`
      background-color: ${DS_Colors.white};
    `}

  ${(props) =>
    props.variant === "striped" &&
    css`
      background-color: ${DS_Colors.white};

      tr:nth-child(even) {
        background-color: rgba(0, 0, 0, 0.03);
      }
    `}
`;

export const TableRow = styled.tr<DS_TableRowProps>`
  transition: background-color 0.2s ease;

  ${(props) =>
    !props.isHeader &&
    !props.isFooter &&
    css`
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    `}

  ${(props) =>
    props.isHeader &&
    css`
      background-color: ${DS_Colors.primary[900]};
      color: ${DS_Colors.white};
    `}
    
  ${(props) =>
    props.isFooter &&
    css`
      background-color: rgba(0, 0, 0, 0.05);
      font-weight: bold;
    `}
`;

export const TableCell = styled.td<DS_TableCellProps>`
  padding: ${DS_Spacing.s3};
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  ${(props) => props.width && `width: ${props.width};`}

  ${(props) =>
    props.isHeader &&
    css`
      font-weight: bold;
    `}
`;

export const TableHeader = styled.th<DS_TableCellProps>`
  padding: ${DS_Spacing.s3};
  text-align: left;
  color: ${DS_Colors.white};
  ${(props) => props.width && `width: ${props.width};`}
`;

export const EmptyMessage = styled.div`
  padding: ${DS_Spacing.s3};
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${DS_Colors.primary[900]};
`;

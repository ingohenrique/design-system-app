import styled, { css } from "styled-components";
import type { DS_CardProps } from "./types";
import { DS_Spacing } from "../../spacing";
import { DS_Colors } from "../../colors";

export const Container = styled.div<DS_CardProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  border-radius: ${DS_Spacing.s2};
  overflow: hidden;
  background-color: ${DS_Colors.white};
  box-shadow: 0 2px 8px ${DS_Colors.black[90]};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-${DS_Spacing.s1});
    box-shadow: 0 4px 12px ${DS_Colors.black[90]};
  }

  ${(props) =>
    props.variant === "default" &&
    css`
      background-color: ${DS_Colors.white};
    `}

  ${(props) =>
    props.variant === "bordered" &&
    css`
      border: ${DS_Spacing.s1} solid ${DS_Colors.primary[700]};
    `}
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const ContentContainer = styled.div<{ hasImage?: boolean }>`
  padding: ${DS_Spacing.s3};
  display: flex;
  flex-direction: column;
  gap: ${DS_Spacing.s2};
  flex: 1;

  ${(props) =>
    !props.hasImage &&
    css`
      border-radius: ${DS_Spacing.s2} ${DS_Spacing.s2} 0 0;
    `}
`;

export const Title = styled.h3`
  font-size: 18px;
  line-height: 24px;
  color: ${DS_Colors.black[100]};
  margin: 0;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Footer = styled.div`
  padding: ${DS_Spacing.s3};
  border-top: ${DS_Spacing.s1} solid ${DS_Colors.black[90]};
`;

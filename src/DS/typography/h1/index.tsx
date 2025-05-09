import { PropsWithChildren } from "react";
import { H1Styled } from "./styles";

export function H1Typography({children}: PropsWithChildren) {
  return <H1Styled>{children}</H1Styled>
}
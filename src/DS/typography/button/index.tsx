import { PropsWithChildren } from "react";
import { ButtonStyled } from "./styles";

export function ButtonTypography({children}: PropsWithChildren) {
  return <ButtonStyled>{children}</ButtonStyled>
}
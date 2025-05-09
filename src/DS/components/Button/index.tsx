import { ButtonTypography } from "../../typography";
import { Container } from "./styles";
import type { DS_ButtonProps } from "./types";

export function DS_Button({
  rightIcon,
  leftIcon,
  children,
  state,
  ...props
}: DS_ButtonProps) {
  return (
    <Container state={state} {...props}>
      {leftIcon && <span data-testid="left-icon">{leftIcon}</span>}
      <ButtonTypography>{children}</ButtonTypography>
      {rightIcon && <span data-testid="right-icon">{rightIcon}</span>}
    </Container>
  )
}
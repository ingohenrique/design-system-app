import { PropsWithChildren } from "react";
import { Container, CardImage, ContentContainer, Title, Content, Footer } from "./styles";
import type { DS_CardProps } from "./types";

export function DS_Card({
  title,
  image,
  footer,
  children,
  variant,
  ...props
}: PropsWithChildren<DS_CardProps>) {
  return (
    <Container variant={variant} {...props}>
      {image && <CardImage src={image} alt={title || "Card image"} />}
      <ContentContainer hasImage={!!image}>
        {title && <Title data-testid="card-title">{title}</Title>}
        <Content data-testid="card-content">{children}</Content>
      </ContentContainer>
      {footer && <Footer data-testid="card-footer">{footer}</Footer>}
    </Container>
  )
} 
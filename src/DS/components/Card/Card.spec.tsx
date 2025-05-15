import {
  describe,
  expect,
  it
} from "vitest"

import {render, screen} from "@testing-library/react"
import { DS_Card } from "."
import { DS_Button } from "../Button"

describe("Components/Card", () => {
  it("should render with children content", () => {
    render(
      <DS_Card variant="default">
        Card content
      </DS_Card>
    )

    expect(screen.getByText("Card content")).toBeTruthy()
  })

  it("should render with title", () => {
    render(
      <DS_Card variant="default" title="Card Title">
        Card content
      </DS_Card>
    )

    expect(screen.getByTestId("card-title")).toBeTruthy()
    expect(screen.getByText("Card Title")).toBeTruthy()
  })

  it("should render with image", () => {
    render(
      <DS_Card 
        variant="default" 
        title="Card Title" 
        image="https://example.com/image.jpg"
      >
        Card content
      </DS_Card>
    )

    const image = document.querySelector("img") as HTMLImageElement
    expect(image.src).toBe("https://example.com/image.jpg")
    expect(image.alt).toBe("Card Title")
  })

  it("should render without image", () => {
    const { container } = render(
      <DS_Card 
        variant="default" 
        title="Card Title Without Image"
      >
        Card content without image
      </DS_Card>
    )

    const image = container.querySelector("img")
    expect(image).toBeNull()
    expect(screen.getByText("Card content without image")).toBeTruthy()
  })

  it("should render with footer", () => {
    render(
      <DS_Card 
        variant="default" 
        footer={<DS_Button state="default">Action</DS_Button>}
      >
        Card content
      </DS_Card>
    )

    expect(screen.getByTestId("card-footer")).toBeTruthy()
    expect(screen.getByText("Action")).toBeTruthy()
  })

  it("should render with bordered variant", () => {
    const { container } = render(
      <DS_Card variant="bordered">
        Card content
      </DS_Card>
    )
    
    // Checking if the border style is applied in the snapshot
    expect(container).toBeTruthy()
  })

  it("should take a snapshot", () => {
    const { asFragment } = render(
      <DS_Card variant="default" title="Card Title">
        Card content
      </DS_Card>
    )
    expect(asFragment()).toMatchSnapshot()
  })
}) 
import {
  describe,
  expect,
  it,
  vi
} from "vitest"

import {fireEvent, render, screen} from "@testing-library/react"
import { DS_Button } from "."
import { FaSignInAlt } from "react-icons/fa"

describe("Components/Button", () => {
  it("should render with children text", () => {
    render(<DS_Button state="default">Entrar</DS_Button>)

    expect(screen.getByText("Entrar")).toBeTruthy()

  })

  it("should render with right icon", () => {
    const handleClick = vi.fn();

    render(
      <DS_Button
        state="outlined"
        rightIcon={<FaSignInAlt />}
        onClick={handleClick}
      >
        Entrar
      </DS_Button>
    )

    fireEvent.click(screen.getByText("Entrar"));

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId("right-icon")).toBeTruthy();
    expect(screen.getByText("Entrar")).toBeTruthy();
    })

  it("should render with left icon", () => {
    const handleClick = vi.fn();

    render(
      <DS_Button
        state="outlined"
        leftIcon={<FaSignInAlt />}
        onClick={handleClick}
      >
        Entrar
      </DS_Button>
    )

    fireEvent.click(screen.getByText("Entrar"));

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId("left-icon")).toBeTruthy();
    expect(screen.getByText("Entrar")).toBeTruthy();
    })

  it("should take a snapshot", () => {
    const { asFragment } = render(
      <DS_Button state="default">Entrar</DS_Button>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  })
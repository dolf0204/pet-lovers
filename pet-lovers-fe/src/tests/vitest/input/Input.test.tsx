import { describe, expect, it } from "vitest";
import { act } from "@testing-library/react";
import { INPUT_COMPONENT_TEST_ID } from "./testIds";
import { Input } from "../../../common/components/input";
import { render, screen, userEvent } from "../utils/testUtils";

describe("Input component", () => {
  describe("mounting, and snapshot", () => {
    it("should render when mounted in the DOM tree", () => {
      render(<Input testId={INPUT_COMPONENT_TEST_ID} />);
      const input = screen.getByTestId(INPUT_COMPONENT_TEST_ID);
      expect(input).toBeInTheDocument();
    });

    it("should match snapshot", () => {
      render(<Input testId={INPUT_COMPONENT_TEST_ID} />);
      const input = screen.getByTestId(INPUT_COMPONENT_TEST_ID);
      expect(input).toMatchSnapshot();
    });
  });

  describe("type prop", () => {
    it("should render with type='text' when type prop is not passed", () => {
      render(<Input testId={INPUT_COMPONENT_TEST_ID} />);
      const input = screen.getByTestId(INPUT_COMPONENT_TEST_ID);
      expect(input).toHaveAttribute("type", "text");
    });
  });

  describe("disabled prop", () => {
    it("should render with disabled when disabled prop is passed", () => {
      render(<Input testId={INPUT_COMPONENT_TEST_ID} disabled />);
      const input = screen.getByTestId(INPUT_COMPONENT_TEST_ID);
      expect(input).toBeDisabled();
    });
  });

  describe("testing label", () => {
    it("should render with label when label prop is passed", () => {
      render(<Input testId={INPUT_COMPONENT_TEST_ID} label="test" />);
      const label = screen.getByText("test");
      expect(label).toBeInTheDocument();
    });

    it("should render htmlFor attribute with name prop when label and name props are passed", () => {
      render(
        <Input testId={INPUT_COMPONENT_TEST_ID} label="test" name="name" />
      );
      const label = screen.getByText("test");
      expect(label).toHaveAttribute("for", "name");
    });
  });

  describe("handle input change", () => {
    it("should call onChange when input value changes", async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<Input testId={INPUT_COMPONENT_TEST_ID} onChange={onChange} />);
      const input = screen.getByTestId(INPUT_COMPONENT_TEST_ID);
      await act(async () => {
        await user.type(input, "test");
      });
      expect(onChange).toHaveBeenCalled();
      expect(input.getAttribute("value")).toBe("test");
    });

    it("should allow string input when type='text'", async () => {
      const user = userEvent.setup();
      render(<Input testId={INPUT_COMPONENT_TEST_ID} />);
      const input = screen.getByTestId(INPUT_COMPONENT_TEST_ID);
      await act(async () => {
        await user.type(input, "123test");
      });
      expect(input.getAttribute("value")).toBe("123test");
    });
  });
});

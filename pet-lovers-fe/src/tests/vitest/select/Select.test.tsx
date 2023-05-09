import { fireEvent, render, screen } from "@testing-library/react";
import { SELECT_TEST_ID, SELECT_LABEL_TEST_ID } from "./testIds";
import { Select } from "../../../common/components/select";

// TESTS RENDERING COMPONENTS
describe("Select component when mounted should check if components are in the DOM tree", () => {
  describe("Select element", () => {
    it("Should be in the dom tree", () => {
      render(
        <Select
          testId={SELECT_TEST_ID}
          label="Label"
          allowClear={true}
          className="select-class"
          options={[]}
          name="test-select"
          value={undefined}
          disabled={false}
          style={{}}
          required={true}
          onChange={() => {}}
        />
      );
      const selectElement = screen.getByTestId(SELECT_TEST_ID);
      expect(selectElement).toBeInTheDocument();
    });
  });
  describe("Label element", () => {
    it("Should be in the dom tree", () => {
      render(
        <Select
          testId={SELECT_TEST_ID}
          label="Label"
          allowClear={true}
          className="select-class"
          options={[]}
          name="test-select"
          value={undefined}
          disabled={false}
          style={{}}
          required={true}
          onChange={() => {}}
          labelTestId={SELECT_LABEL_TEST_ID}
        />
      );
      const selectLabelElement = screen.getByTestId(SELECT_LABEL_TEST_ID);
      expect(selectLabelElement).toBeInTheDocument();
    });
  });
});

// TESTS CHANGING VALUES
describe("Select component when selecting option value", () => {
  describe("overriding an onClick callback", () => {
    it("should invoke the callback when clicked", async () => {
      render(
        <Select
          testId={SELECT_TEST_ID}
          label="Label"
          allowClear={true}
          className="select-class"
          options={[]}
          name="test-select"
          value={undefined}
          disabled={false}
          style={{}}
          required={true}
          onChange={() => {}}
        />
      );

      const selectElement = screen.getByTestId(SELECT_TEST_ID);
      const cb = vi.fn();

      (selectElement as any)["onClick"] = cb;
      selectElement.click = cb;
      selectElement.click();
      expect(cb).toBeCalledTimes(1);
    });
  });
  describe("Changing value", () => {
    it("should change the value when selected", async () => {
      render(
        <Select
          testId={SELECT_TEST_ID}
          label="Label"
          allowClear={true}
          className="select-class"
          options={[]}
          name="test-select"
          value={undefined}
          disabled={false}
          style={{}}
          required={true}
          onChange={() => {}}
        />
      );
      const selectElement = screen
        .getByTestId(SELECT_TEST_ID)
        .querySelector("input")!;

      fireEvent.select(selectElement, { target: { value: "test1" } });
      expect(selectElement.value).toBe("test1");
    });
  });

  // TESTS SNAPSHOT
  describe("Testing snapshot", () => {
    it("Component should match snapshot", async () => {
      render(
        <Select
          testId={SELECT_TEST_ID}
          label="Label"
          allowClear={true}
          className="select-class"
          options={[]}
          name="test-select"
          value={undefined}
          disabled={false}
          style={{}}
          required={true}
          onChange={() => {}}
        />
      );

      const selectElement = screen.getByTestId(SELECT_TEST_ID);

      expect(selectElement).toMatchSnapshot();
    });
  });
});

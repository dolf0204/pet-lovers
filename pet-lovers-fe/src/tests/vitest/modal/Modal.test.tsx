import { describe, expect, it } from "vitest";
import { render, screen } from "../utils/testUtils";
import { MODAL_TEST_ID } from "./testIds";
import { ModalComponent } from "../../../common/components/modal/Modal";

// TESTS RENDERING COMPONENTS
describe("Modal component when mounted should check if components are in the DOM tree", () => {
  describe("Modal element", () => {
    it("Should be in the dom tree", () => {
      render(
        <ModalComponent
          visible={true}
          width={200}
          title="Test modal"
          testId={MODAL_TEST_ID}
          onCancel={() => {}}
        />
      );
      const modalElement = screen.getByTestId(MODAL_TEST_ID);
      expect(modalElement).toBeInTheDocument();
    });
  });
});

// TESTS SNAPSHOT
describe("Testing snapshot", () => {
  it("Component should match snapshot", async () => {
    render(
      <ModalComponent
        visible={true}
        width={200}
        title="Test modal"
        testId={MODAL_TEST_ID}
        onCancel={() => {}}
      />
    );

    const modalElement = screen.getByTestId(MODAL_TEST_ID);

    expect(modalElement).toMatchSnapshot();
  });
});

// TESTS PASSING VALUES
describe("Testing passing width property", () => {
  it("Component should have width 200 when passing width={200}", async () => {
    const onChange = vi.fn();

    render(
      <ModalComponent
        onCancel={onChange}
        visible={true}
        width={200}
        testId={MODAL_TEST_ID}
        title="Test modal"
      />
    );

    const modalElement = screen.getByTestId(MODAL_TEST_ID);

    const innerModalElement = modalElement.getElementsByClassName(
      "ant-modal css-dev-only-do-not-override-yp8pcc"
    );

    const modalWidth = innerModalElement[0].getAttribute("style");

    expect(modalWidth).toBe("width: 200px;");
  });
});

// TESTS ON CLICK CALLBACK
describe("overriding an onClick callback", () => {
  it("should invoke the callback when clicked", async () => {
    const onChange = vi.fn();

    render(
      <ModalComponent
        onCancel={onChange}
        visible={true}
        width={200}
        testId={MODAL_TEST_ID}
        title="Test modal"
      />
    );

    const modalElement = screen.getByTestId(MODAL_TEST_ID);
    const cb = vi.fn();

    (modalElement as any)["onClick"] = cb;
    modalElement.click = cb;
    modalElement.click();
    expect(cb).toBeCalledTimes(1);
  });
});

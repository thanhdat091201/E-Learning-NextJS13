import { useConfettiStore } from "@/hooks/use-confetti-store";
import { describe, test, expect } from "vitest";
describe("useSearch", () => {
  test("should initialize isOpen as false", () => {
    const { isOpen } = useConfettiStore.getState();
    expect(isOpen).toBe(false);
  });

  test("should set isOpen to true when onOpen is called", () => {
    const { onOpen } = useConfettiStore.getState();
    onOpen();
    const { isOpen } = useConfettiStore.getState();
    expect(isOpen).toBe(true);
  });

  test("should set isOpen to false when onClose is called", () => {
    const { onOpen, onClose } = useConfettiStore.getState();
    onOpen();
    onClose();
    const { isOpen } = useConfettiStore.getState();
    expect(isOpen).toBe(false);
  });
});

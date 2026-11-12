import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
	test("should render", () => {
		render(<Button>Test</Button>);
		expect(screen.getByText("Test")).toBeInTheDocument();
	});

	test("should be called", () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Test click</Button>);
		fireEvent.click(screen.getByText("Test click"));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test("should be disabled", () => {
		render(<Button disabled>Test disabled</Button>);
		expect(screen.getByText("Test disabled")).toBeDisabled();
	});
});

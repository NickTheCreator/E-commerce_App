type ClassValue = string | Record<string, boolean> | undefined | null;

export function classNames(...args: ClassValue[]): string {
	return args
		.flatMap((argument) => {
			if (!argument) return [];
			if (typeof argument === "string") return [argument];
			if (typeof argument === "object") {
				return Object.entries(argument)
					.filter(([_, value]) => Boolean(value))
					.map(([key]) => key);
			}
			return [];
		})
		.join("");
}

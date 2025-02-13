// styled.d.ts
import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			Primary: {
				"water green-50": string;
				"water green-100": string;
				"water green-200": string;
				"water green-300": string;
				"water green-400": string;
				"water green-500": string;
				"water green-600": string;
				"water green-700": string;
				"water green-800": string;
				"water green-900": string;
			};
			Secondary: {
				"cyan blue-50": string;
				"cyan blue-100": string;
				"cyan blue-200": string;
				"cyan blue-300": string;
				"cyan blue-400": string;
				"cyan blue-500": string;
				"cyan blue-600": string;
				"cyan blue-700": string;
				"cyan blue-800": string;
				"cyan blue-900": string;
			};
			Neutral: {
				"gray-0": string;
				"gray-50": string;
				"gray-100": string;
				"gray-200": string;
				"gray-300": string;
				"gray-400": string;
				"gray-500": string;
				"gray-600": string;
				"gray-700": string;
				"gray-800": string;
				"gray-900": string;
				"gray-1000": string;
				"gray-full": string;
			};
			Feedback: {
				Info: {
					"blue-50": string;
					"blue-100": string;
					"blue-200": string;
					"blue-300": string;
					"blue-400": string;
					"blue-500": string;
					"blue-600": string;
					"blue-700": string;
					"blue-800": string;
					"blue-900": string;
				};
				Success: {
					"green-50": string;
					"green-100": string;
					"green-200": string;
					"green-300": string;
					"green-400": string;
					"green-500": string;
					"green-600": string;
					"green-700": string;
					"green-800": string;
					"green-900": string;
				};
				Warning: {
					"yellow-50": string;
					"yellow-100": string;
					"yellow-200": string;
					"yellow-300": string;
					"yellow-400": string;
					"yellow-500": string;
					"yellow-600": string;
					"yellow-700": string;
					"yellow-800": string;
					"yellow-900": string;
				};
				Danger: {
					"orange-50": string;
					"orange-100": string;
					"orange-200": string;
					"orange-300": string;
					"orange-400": string;
					"orange-500": string;
					"orange-600": string;
					"orange-700": string;
					"orange-800": string;
					"orange-900": string;
				};
			};
			background: string;
			contacts: {
				github: string;
				linkedin: string;
				whatsapp: string;
				email: string;
				default: string;
			};
		};
		shadows: {
			cards: {
				initial: string;
				final: string;
			};
		};
		breakpoints: {
			mobile: string;
			tablet: { min: string; max: string };
			desktop: string;
		};
	}
}

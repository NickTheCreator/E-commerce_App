import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "./app/providers";
import { PageError } from "./shared/widget/PageError";

import App from "./app/App";

import "@/shared/config/i18n/i18n";
import "./app/styles/index.scss";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<ErrorBoundary fallback={<PageError />}>
					<App />
				</ErrorBoundary>
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>,
);

import { Suspense } from "react";
import { AppRouter } from "./providers";

function App() {
	return (
		<Suspense fallback="Loading">
			<AppRouter />;
		</Suspense>
	);
}

export default App;

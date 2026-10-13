import { Link } from "react-router";

export default function NotFoundPage() {
	return (
		<>
			<h1>Error 404 | page not found</h1>
			<Link to={"/"}>
				<button>Go back home</button>
			</Link>
		</>
	);
}

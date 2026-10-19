import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function LoginPage() {
	const { t } = useTranslation("login");

	return (
		<>
			<h1>{t("login")}</h1>
			<Link to={"/"}>Go back to home</Link>
		</>
	);
}

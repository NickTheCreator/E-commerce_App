import { Link } from "react-router";
import styles from "./HomePage.module.scss";
import { useTheme } from "@/shared/config";
import { useTranslation } from "react-i18next";

export default function HomePage() {
	const { toggleTheme } = useTheme();
	const { t, i18n } = useTranslation();

	const changeLanguage = () => {
		i18n.changeLanguage(i18n.language === "en" ? "pt" : "en");
	};

	return (
		<>
			<h1 className={styles.title}>{t("hello")}</h1>
			<button onClick={toggleTheme}>Theme</button>
			<button onClick={changeLanguage}>{i18n.language}</button>
			<Link to={"/login"}>Login page</Link>
		</>
	);
}

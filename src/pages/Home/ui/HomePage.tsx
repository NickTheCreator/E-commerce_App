import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import { useTheme } from "@/shared/config";
import { Button } from "@/shared/ui";

import styles from "./HomePage.module.scss";

export default function HomePage() {
	const { toggleTheme } = useTheme();
	const { t, i18n } = useTranslation();

	const changeLanguage = () => {
		i18n.changeLanguage(i18n.language === "en" ? "pt" : "en");
	};

	return (
		<>
			<h1 className={styles.title}>{t("hello")}</h1>
			<Button
				theme="outline"
				onClick={toggleTheme}
			>
				Theme
			</Button>
			<Button
				theme="outline"
				onClick={changeLanguage}
			>
				{i18n.language}
			</Button>
			<Link to={"/login"}>Login page</Link>
		</>
	);
}

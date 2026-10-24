import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import { useTheme } from "@/shared/config";
import { AppIcon, Button, Input } from "@/shared/ui";

import SearchIcon from "@/shared/assets/icons/Search.svg?react";
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
			<Input
				Icon={
					<AppIcon
						Icon={SearchIcon}
						filled
					/>
				}
				placeholder="Search..."
			/>
			<Button onClick={toggleTheme}>Theme</Button>
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

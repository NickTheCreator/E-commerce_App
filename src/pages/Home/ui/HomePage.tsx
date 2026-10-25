import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import { Header } from "@/shared/widget/Header";

import styles from "./HomePage.module.scss";

export default function HomePage() {
	const { t } = useTranslation();
	return (
		<>
			<Header />
			<h1 className={styles.title}>{t("hello")}</h1>
			<Link to={"/login"}>Login page</Link>
		</>
	);
}

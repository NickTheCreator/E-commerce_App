import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import { Header } from "@/shared/widget/Header";

import styles from "./HomePage.module.scss";
import { Footer } from "@/shared/widget/Footer";

export default function HomePage() {
	const { t } = useTranslation();
	return (
		<div className={styles.pageWrapper}>
			<Header />
			<main className={styles.content}>
				<h1 className={styles.title}>{t("hello")}</h1>
				<Link to={"/login"}>Login page</Link>
			</main>
			<Footer />
		</div>
	);
}

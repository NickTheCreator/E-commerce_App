import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import { Button } from "@/shared/ui";
import { routePaths } from "@/shared/config";

import PageNotFoundIcon from "@/shared/assets/icons/NotFound.svg?react";

import styles from "./NotFoundPage.module.scss";

export default function NotFoundPage() {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleClickBack = () => {
		if (window.history.length < 1) {
			navigate(routePaths.home);
			return;
		}
		navigate(-1);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<PageNotFoundIcon className={styles.icon} />
				<h3 className={styles.title}>{t("pageNotFound.title")}</h3>
				<p className={styles.description}>{t("pageNotFound.description")}</p>
				<Button
					onClick={handleClickBack}
					theme="primary"
					form="rounded"
					className={styles.button}
				>
					{t("pageNotFound.goBack")}
				</Button>
			</div>
		</div>
	);
}

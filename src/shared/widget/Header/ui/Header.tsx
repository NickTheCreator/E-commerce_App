import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import { routePaths } from "@/shared/config";
import { AppIcon, Button, Input } from "@/shared/ui";

import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

import LogoIcon from "@/shared/assets/icons/Logo.svg?react";
import MapPin from "@/shared/assets/icons/MapPin.svg?react";
import SearchIcon from "@/shared/assets/icons/Search.svg?react";
import UserIcon from "@/shared/assets/icons/Users.svg?react";

import styles from "./Header.module.scss";

export default function Header() {
	const navigate = useNavigate();
	const { t } = useTranslation();

	const handleLoginClick = () => {
		navigate(routePaths.login);
	};

	return (
		<header className={styles.header}>
			<div className={styles.section}>
				<LogoIcon className={styles.logo} />
				<Button theme="ghost">
					<AppIcon Icon={MapPin} />
					<span>Random address</span>
				</Button>
			</div>
			<div className={styles.section}>
				<Input
					Icon={
						<AppIcon
							Icon={SearchIcon}
							size={18}
							theme="background"
						/>
					}
					placeholder={t("header.searchBy")}
					rouded
				/>
			</div>
			<div className={styles.section}>
				<Button theme="secondary">{t("header.cart")}</Button>
				<Button
					onClick={handleLoginClick}
					theme="outline"
				>
					<AppIcon Icon={UserIcon} />
					{t("header.login")}
				</Button>

				<ThemeSwitcher />

				<LanguageSwitcher />
			</div>
		</header>
	);
}

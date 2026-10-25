import { useTranslation } from "react-i18next";
import { useTheme } from "@/shared/config";
import { AppIcon, Button, Input } from "@/shared/ui";

import LogoIcon from "@/shared/assets/icons/Logo.svg?react";
import MapPin from "@/shared/assets/icons/MapPin.svg?react";
import SearchIcon from "@/shared/assets/icons/Search.svg?react";
import ShoppingCartIcon from "@/shared/assets/icons/ShoppingCart.svg?react";
import UserIcon from "@/shared/assets/icons/Users.svg?react";
import CircleIcon from "@/shared/assets/icons/Circle.svg?react";
import EnglishFlagIcon from "@/shared/assets/icons/English.svg?react";
import BrazilFlagIcon from "@/shared/assets/icons/Brazil.svg?react";

import styles from "./Header.module.scss";

export default function Header() {
	const { toggleTheme } = useTheme();
	const { i18n } = useTranslation();

	const changeLanguage = () => {
		i18n.changeLanguage(i18n.language === "en" ? "pt" : "en");
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
					placeholder={"Search by"}
					rouded
				/>
			</div>
			<div className={styles.section}>
				<Button theme="secondary">
					<span>Cart</span>
				</Button>
				<Button theme="outline">
					<AppIcon Icon={UserIcon} />
					<span>Login</span>
				</Button>

				<Button
					theme="ghost"
					onClick={toggleTheme}
				>
					<AppIcon
						Icon={CircleIcon}
						filled
					/>
				</Button>
				<Button
					theme="ghost"
					onClick={changeLanguage}
				>
					{i18n.language === "en" ? (
						<AppIcon Icon={EnglishFlagIcon} />
					) : (
						<AppIcon Icon={BrazilFlagIcon} />
					)}
				</Button>
			</div>
		</header>
	);
}

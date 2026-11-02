import { useNavigate } from "react-router";
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
					placeholder={"Search by"}
					rouded
				/>
			</div>
			<div className={styles.section}>
				<Button theme="secondary">
					<span>Cart</span>
				</Button>
				<Button
					onClick={handleLoginClick}
					theme="outline"
				>
					<AppIcon Icon={UserIcon} />
					<span>Login</span>
				</Button>

				<ThemeSwitcher />

				<LanguageSwitcher />
			</div>
		</header>
	);
}

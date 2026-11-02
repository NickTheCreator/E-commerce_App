import { languageIconList, type SupportedLngsType } from "@/shared/config";
import { AppIcon, Button } from "@/shared/ui";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
	const { i18n } = useTranslation();

	const changeLanguage = () => {
		i18n.changeLanguage(i18n.language === "en" ? "pt" : "en");
	};

	const currentlanguage = i18n.language as SupportedLngsType;

	return (
		<Button
			theme="ghost"
			onClick={changeLanguage}
		>
			<AppIcon Icon={languageIconList[currentlanguage]} />
		</Button>
	);
}

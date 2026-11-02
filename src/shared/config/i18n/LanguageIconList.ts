import type { FunctionComponent, SVGProps } from "react";
import { supportedLngs } from "./i18n";

import EnglishFlagIcon from "@/shared/assets/icons/English.svg?react";
import BrazilFlagIcon from "@/shared/assets/icons/Brazil.svg?react";

export type SupportedLngsType = (typeof supportedLngs)[number];
type LanguageIconListType = Record<SupportedLngsType, FunctionComponent<SVGProps<SVGSVGElement>>>;

export const languageIconList: LanguageIconListType = {
	en: EnglishFlagIcon,
	pt: BrazilFlagIcon,
};

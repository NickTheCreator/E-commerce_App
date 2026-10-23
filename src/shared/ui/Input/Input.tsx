import { useState, type ChangeEvent, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/shared/lib";

import Button from "../Button/Button";

import HideIcon from "@/shared/assets/icons/Hide.svg?react";
import ShowIcon from "@/shared/assets/icons/Show.svg?react";

import styles from "./Input.module.scss";

type HTMLInputType = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

interface InputProps extends HTMLInputType {
	Icon?: ReactNode;
	className?: string;
	value?: string;
	disabled?: boolean;
	rouded?: boolean;
	onChange?: (value: string) => void;
}

export default function Input(props: InputProps) {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [focus, setFocus] = useState<boolean>(false);

	const {
		Icon,
		className,
		value,
		onChange,
		disabled = false,
		rouded = false,
		type = "text",
		...rest
	} = props;

	const toggleShowPassword = () => {
		setShowPassword((prev) => !prev);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	const handleFocus = () => {
		setFocus(true);
	};
	const handleBlur = () => {
		setFocus(false);
	};

	return (
		<div
			className={cn(styles.inputContainer, className, {
				[styles.rouded]: rouded,
				[styles.disabled]: disabled,
				[styles.focus]: focus,
			})}
		>
			{Icon}
			<input
				{...rest}
				value={value}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				disabled={disabled}
				type={showPassword && type === "password" ? "text" : type}
				className={cn(styles.input, {
					[styles.disabled]: disabled,
				})}
			/>

			{type === "password" && (
				<>
					<Button
						type="button"
						theme="ghost"
						className={styles.toggleVisibility}
						onClick={toggleShowPassword}
					>
						{showPassword ? <HideIcon /> : <ShowIcon />}
					</Button>
				</>
			)}
		</div>
	);
}

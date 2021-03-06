import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./toggleMode.module.scss";
import React from "react";

export default function ToggleMode() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const toggleLight = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	return (
		<label className={styles.buttonLight}>
			<input id="test" type="checkbox" onClick={toggleLight} />
			<span class={styles.slider}>
				<img
					src="/img/asset/moon.svg"
					alt="light mode"
					unselectable="on"
					width="20"
					height="20"
				/>
			</span>
		</label>
	);
}

import Link from "next/link";
import ToggleMode from "../../../toggleMode/toggleMode";
import styles from "./header.module.scss";

const Header = () => (
	<header className={styles.header}>
		<nav>
			<Link href="https://ljtech.ca">
				<a className={styles.green}>visit ljtech.ca</a>
			</Link>
		</nav>
		<div className={styles.action}>
			<ToggleMode />
		</div>
	</header>
);

export default Header;

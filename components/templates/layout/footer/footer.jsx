import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => (
	<footer className={styles.footer}>
		<Link href="https://github.com/ljtech">
			<a className={styles.pink}>ljtech on github</a>
		</Link>
		<Link href="https://www.twitch.tv/ljtechdotca">
			<a className={styles.purple}>ljtech on twitch</a>
		</Link>
	</footer>
);

export default Footer;

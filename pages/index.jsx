import Head from "next/head";
import { Layout } from "../components/templates/template";
import styles from "../styles/includes/Home.module.scss";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Home</title>
			</Head>
			<section className={styles.landing}>
				<article className={styles.component}>
					<div className={styles.division}>
						<img src="/img/logo/ljtech-g.svg" alt="ljtech-g" />
					</div>
					<h1>ljtech template</h1>
					<div className={styles.division}>
						<img src="/img/logo/ljtech-r.svg" alt="ljtech-r" />
						<img src="/img/logo/ljtech-p.svg" alt="ljtech-p" />
					</div>
				</article>
			</section>
		</Layout>
	);
}

import Head from "next/head";
import { whois } from "../../../lib/whois";

const Meta = () => (
	<Head>
		<title>{whois.author} template</title>
		<meta charSet="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta author={whois.author} />
		<meta keywords="HTML, CSS, JavaScript, React, Next.js, Template" />
		<meta property="og:url" content={`${whois.author}.ca`} key="ogurl" />
		<meta
			property="og:image"
			content="https://i.imgur.com/tdzbNAV.png"
			key="ogimage"
		/>
		<meta
			property="og:site_name"
			content={`${whois.author}.ca`}
			key="ogsitename"
		/>
		<meta property="og:title" content={whois.author} key="ogtitle" />
		<meta
			property="og:description"
			content={`This template was made by ${whois.author}.`}
			key="ogdesc"
		/>
		<link rel="icon" href="/favicon.ico" />
	</Head>
);

export default Meta;

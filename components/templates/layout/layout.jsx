import Meta from "./meta";
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ children }) => (
	<>
		<Meta />
		<body className="bg-lit dark:bg-unlit dark:text-lit">
			<Header />
			<main>{children}</main>
			<Footer />
		</body>
	</>
);

export default Layout;

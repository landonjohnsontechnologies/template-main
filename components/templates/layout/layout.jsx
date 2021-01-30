import Meta from "./meta";
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ children }) => (
	<html lang="en">
		<Meta />
		<body className="bg-lit dark:bg-unlit dark:text-white">
			<Header />
			<main>{children}</main>
			<Footer />
		</body>
	</html>
);

export default Layout;

import React from "react";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
import LayoutContent from "./content";

const MainLayout = () => {
	return (
		<main className="relative">
			<LayoutHeader />
			<LayoutContent />
			<LayoutFooter />
		</main>
	);
};

export default MainLayout;

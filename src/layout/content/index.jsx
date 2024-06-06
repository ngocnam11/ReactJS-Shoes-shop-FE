import React from "react";
import { Outlet } from "react-router-dom";

const LayoutContent = () => {
	return (
		<section className="mb-20">
			<Outlet />
		</section>
	);
};

export default LayoutContent;
